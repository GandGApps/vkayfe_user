import React from 'react';
import {styles} from './styles';
import {Text, TouchableOpacity, View} from 'react-native';
import {globalStyles, MessagesName} from '../../../constants';

export const ChatForm = ({item, navigation, index}) => {


  const time = item.time.slice(0, 5);



  return (
    <TouchableOpacity
      style={styles.chatContainer}
      onPress={() =>
        navigation.navigate(MessagesName, {
          item,
          state: item.priority === 'admin' ? true : false,
        })
      }>
      <Text
        style={[
          globalStyles.titleText,
          globalStyles.titleTextSmall,
          globalStyles.textAlignLeft,
          styles.name,
        ]}>
        {item.name} 
      </Text>
      <Text
        style={[
          globalStyles.titleText,
          globalStyles.titleTextSmall,
          globalStyles.textAlignLeft,
          globalStyles.weightLight,
          {marginRight: 30},
        ]}
        numberOfLines={1}>
        {item.lastMessage.indexOf('/images') !== -1 ? 'Фото' : item.lastMessage}
      </Text>
      <View style={styles.timeContainer}>
        <Text
          style={[
            globalStyles.titleText,
            globalStyles.titleTextSmall4,
            globalStyles.weightLight,
          ]}>
          {time}
        </Text>
      </View>
      {item.newMessCount ? (
                <View style={styles.notNumberCont}>
                  <Text style={styles.notNumber}>{item.newMessCount}</Text>
                </View>
              ) : null}
      
    </TouchableOpacity>
  );
};
