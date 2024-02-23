import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {
  FlatList,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, globalStyles} from '../../../../constants';
import {ChatData_, FinancialForm, globalHeight} from '../../../../components';
import {ChatForm} from '../../../../components/form/chatForm';
import axiosInstance from '../../../../networking/axiosInstance';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const ChatScreen = ({navigation}) => {
  const [active, setActive] = useState('За сегодня');
  const [data, setData] = useState([]);
  const [dataState, setDataState] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      axiosFunc();
    });
    return unsubscribe;
  }, [navigation]);
  const axiosFunc = async () => {
    try {
      const response = await axiosInstance.get('/chat/im');
      // console.log(response.data);
      const filterArr = response.data.filter(it => it.priority === 'admin');
      setData(response.data);
      changeStateFunc('За сегодня', response.data);
      setLoading(false);
    } catch (e) {
      // console.log(e);
      setLoading(false);
    }
  };
  const changeStateFunc = (st, dataFunc) => {
    setLoading(true);
    const arr = data;
    if (st === 'Тех.поддержка') {
      const filterArr = dataFunc.filter(it => it.priority === 'admin');
      setDataState([...filterArr]);
      setLoading(false);
    } else if (st === 'Все') {
      setDataState([...dataFunc]);
      setLoading(false);
    } else if (st === 'За сегодня') {
      const newDate = new Date().toLocaleDateString('en-GB');
      const filterArr = dataFunc.filter(it => {
        let a = new Date(it.date).toLocaleDateString('en-GB');
        return a === newDate;
      });
      setLoading(false);
      setDataState([...filterArr]);
    }
    setActive(st);
  };

  //  console.log('dataState',dataState)

  return (
    <View
      style={[
        globalStyles.container,
        Platform.OS === 'ios' && {marginTop: -(getStatusBarHeight(true) + 5)},
      ]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.blueBackground}
      />
      <View
        style={[
          styles.headerContainer,
          Platform.OS === 'ios' && {
            paddingTop: getStatusBarHeight(true) + globalHeight(50),
          },
        ]}>
        <Text
          style={[
            globalStyles.titleText,
            globalStyles.textAlignLeft,
            globalStyles.weightBold,
            globalStyles.titleTextBig,
          ]}>
          Сообщения
        </Text>
        <View style={[globalStyles.row, styles.headerFooter]}>
          <TouchableOpacity
            style={active === 'За сегодня' && styles.activeText}
            onPress={() => changeStateFunc('За сегодня', data)}>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.weightLight,
                globalStyles.titleTextSmall,
                styles.headerFooterText,
                active === 'За сегодня' && styles.activeTextContent,
              ]}>
              За сегодня
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={active === 'Все' && styles.activeText}
            onPress={() => changeStateFunc('Все', data)}>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.weightLight,
                globalStyles.titleTextSmall,
                styles.headerFooterText,
                active === 'Все' && styles.activeTextContent,
              ]}>
              Все
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={active === 'Тех.поддержка' && styles.activeText}
            onPress={() => changeStateFunc('Тех.поддержка', data)}>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.weightLight,
                globalStyles.titleTextSmall,
                styles.headerFooterText,
                active === 'Тех.поддержка' && styles.activeTextContent,
              ]}>
              Тех.поддержка
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={dataState}
        renderItem={({item, index}) => {
          return <ChatForm item={item} key={index} navigation={navigation} />;
        }}
      />
    </View>
  );
};
