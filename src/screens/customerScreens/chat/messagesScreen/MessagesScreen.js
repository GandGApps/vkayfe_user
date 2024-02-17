import React, {useState, useRef, useEffect} from "react";
import {styles} from "./styles";
import {View, Text, ScrollView, TouchableOpacity, TextInput, Image, ActivityIndicator} from "react-native";
import {
    Loading,
    BackButton,
    AppInput, ChooseImage,
} from "../../../../components";
import {globalStyles, BaseUrl} from "../../../../constants";
import sendIcon from "../../../../assets/images/sendIcon.png";
import ChatPlus from "../../../../assets/images/ChatPlus.png";
import {checkTokens} from "../../../../utils";

import io from "socket.io-client";

import {useDispatch, useSelector} from "react-redux";
import ImageView from "react-native-image-viewing";

let socketNew = null;

export const MessagesScreen = ({navigation, route}) => {
    const [chat, setChat] = useState([]);
    const [addInput, setAddInput] = useState("");
    const [text, setText] = useState("");
    const [visible, setVisible] = useState(false);
    const [scrollToEnd, setScrollToEnd] = useState(true);
    const scrollViewRef = useRef();
    const dispatch = useDispatch();
    const store = useSelector((st) => st.customer);
    const [active,setActive] = useState(false)
    const [activeImage,setActiveImage] = useState({})
    const [token, setToken] = useState("");
    const user = route.params?.item;
    const state = route.params?.state;
    const url = `ws://194.58.121.218:3001/chat/messages`;
    const url1 = "ws://194.58.121.218:3001/chat/user";

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
        socketNew = io(state ? url : url1, {
            query: {
                token: token,
                seller_id: user.user_id,
                buyer_id: store._id,
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
            for(let i = 0; i < arr.length; i++){
                if(arr[i].isImage){

                    arr[i].play = false
                }
            }
            setChat([...arr]);
            setVisible(false);
            setScrollToEnd(true);
        });
    };

    const requestCameraPermission = () => {
        try {
            ChooseImage(async (imageRes) => {
                if (!imageRes.didCancel) {
                    socketNew.emit("send-img", `data:image/png;base64,${imageRes.assets[0].base64}`)
                }
            });
        } catch (err) {
        }
    };
    const handleEve = (mess) => {
        if (addInput) {
            socketNew.emit("sendMessage", {text: mess});
        }
    };
    const ChatsFunc = () => {
        return chat.map((item, index) => {
            return (
                <View
                    style={[styles.placeHolderImageViewText,
                        {alignItems: item.role !== "user" || item.role === "admin" ? 'flex-start' : 'flex-end'}
                    ]}
                    key={index}>
                    <View style={[styles.content,
                        item.role !== "user" || item.role === "admin" ? styles.left : styles.right,
                    ]}>
                        {item.isImage ?
                            <TouchableOpacity onPress={() =>{
                                if(!item.play) {
                                    setActiveImage([{ uri: BaseUrl + item.text }])
                                    setActive(true)
                                }}}>
                                {item.play ? (
                                    <ActivityIndicator
                                        size={40}
                                        color={"#569690"}
                                        style={{
                                            position: 'absolute',
                                            zIndex: 10,
                                            bottom: 0,
                                            top: 0,
                                            left: 0,
                                            right: 0
                                        }}
                                    />
                                ) : null}
                                <Image
                                    onLoadStart={e => {
                                        item.play = true
                                        setChat([...chat])

                                    }}
                                    onLoad={e => {
                                        item.play = false
                                        setChat([...chat])
                                    }}
                                    onLoadEnd={e => {
                                        item.play = false
                                        setChat([...chat])

                                    }}
                                    source={{uri: BaseUrl + item.text}} style={styles.imgMsg}/>
                            </TouchableOpacity>
                            :
                            <Text style={[
                                globalStyles.titleText,
                                globalStyles.titleTextSmall,
                                globalStyles.weightLight,
                                styles.placeholderText,
                                {color: "white"},
                            ]}>{item.text}</Text>
                        }
                    </View>

                </View>
            );
        })
    }

    return (
        <View style={styles.chatScrool}>
            <BackButton
                text={user.name}
                navigation={navigation}
                stylesBack={styles.backContainer}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}
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
                {ChatsFunc()}
            </ScrollView>

            <View style={styles.chatInputView}>
                {!state ?
                    <TouchableOpacity onPress={requestCameraPermission}>
                        <Image source={ChatPlus} style={styles.chatPlusImg}/>
                    </TouchableOpacity>
                    : null}
                <AppInput
                    style={styles.textInputChat}
                    value={addInput}
                    onChangeText={(evt) => {
                        setAddInput(evt);
                        setText("");
                    }}/>
                <TouchableOpacity style={styles.chatIconContainer} onPress={() => {
                    handleEve(addInput);
                    setAddInput("");
                }}>
                    <Image source={sendIcon} style={styles.chatIcon}/>
                </TouchableOpacity>
            </View>
            <ImageView
                images={activeImage}
                imageIndex={0}
                visible={active}
                onRequestClose={() => {
                    setActive(false)
                    setActiveImage({})
                }}
            />
            <Loading loading={visible}/>
        </View>
    );
};
