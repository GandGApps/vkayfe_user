import React, { useState, useRef, useEffect } from "react";
import { styles } from "./styles";
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from "react-native";
import {
  Loading,
  BackButton,
  AppInput, ChooseImage,
} from "../../../../components";
import {    globalStyles, BaseUrl } from "../../../../constants";
import sendIcon from "../../../../assets/images/sendIcon.png";
import ChatPlus from "../../../../assets/images/ChatPlus.png";
import { checkTokens } from "../../../../utils";

import io from "socket.io-client";

import { useDispatch, useSelector } from "react-redux";
let socketNew = null;

export const MessagesScreen = ({ navigation, route }) => {
  const [chat, setChat] = useState([]);
  const [addInput, setAddInput] = useState("");
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);
  const [scrollToEnd, setScrollToEnd] = useState(true);
  const scrollViewRef = useRef();
  const dispatch = useDispatch();
  const store = useSelector((st) => st.customer);
  const [token, setToken] = useState("");
  const user = route.params?.item;
  const state = route.params?.state;
  const url = BaseUrl + `/chat/messages`;
  const url1 = BaseUrl + "/chat/user";
  useEffect(() => {
    setTokFunc();
  }, []);

  const setTokFunc = async () => {
    setVisible(true);
    let token = await checkTokens();
    setToken(token);
    socketConnectFunc(token);
  };
  const socketConnectFunc = (token) => {
    socketNew =  io(state ? url : url1, {
      query: {
        token: token,
        seller_id: user.user_id,
        buyer_id:  store._id,
        roomId: user.chatID
      },
    });
      socketNew.on("connect", () => {
        socketNew.emit("getMessage");
      });

    getMessageFunc();
  };
  const getMessageFunc = () => {

    socketNew.on("messages", (messages) => {
      const arr = messages.messages;
      setChat([...arr]);

      setVisible(false);
      setScrollToEnd(true);
    });
  };

  const requestCameraPermission = () => {
    try {
      ChooseImage(async (imageRes) => {
        if (!imageRes.didCancel) {
          socketNew.emit("send-img",`data:image/png;base64,${imageRes.assets[0].base64}`)
        }
      });
    } catch (err) {
    }
  };
  const handleEve = (mess) => {
  if (addInput) {
      socketNew.emit("sendMessage", { text: mess });
    }
  };

  console.log(chat)

  return (
    <View style={styles.chatScrool}>
      <BackButton
        text={user.name}
        navigation={navigation}
        stylesBack={styles.backContainer}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onContentSizeChange={() => {
          if (scrollToEnd && chat.length) {
            scrollViewRef.current.scrollToEnd({
              y: 0,
              animated: true,
            });
            setScrollToEnd(false);
          }
        }}>
        {chat.map((item, index) => {
          return (
            <View
              style={[styles.placeHolderImageViewText,
                item.role !== "user" || item.role === "admin" ? styles.left : styles.right,
                item.isImage ? styles.placeHolderImageViewImg : null,

              ]}
              key={index}>
              {item.isImage ?
                  <Image source={{ uri: BaseUrl + item.text }} style={styles.imgMsg} />
                  :
                  <Text style={[
                    globalStyles.titleText,
                    globalStyles.titleTextSmall,
                    globalStyles.weightLight,
                    styles.placeholderText,
                    { color: "white" },
                  ]}>{item.text}</Text>
              }
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.chatInputView}>
        {!state ?
            <TouchableOpacity onPress={requestCameraPermission}>
              <Image source={ChatPlus} style={styles.chatPlusImg} />
            </TouchableOpacity>
            : null}
        <AppInput
          style={styles.textInputChat}
          value={addInput}
          onChangeText={(evt) => {
            setAddInput(evt);
            setText("");
          }} />
        <TouchableOpacity style={styles.chatIconContainer} onPress={() => {
          handleEve(addInput);
          setAddInput("");
        }}>
          <Image source={sendIcon} style={styles.chatIcon} />
        </TouchableOpacity>
      </View>
      <Loading loading={visible} />
    </View>
  );
};
