import React, { useEffect } from "react";
import { Platform } from "react-native";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import messaging from "@react-native-firebase/messaging";
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const ForegroundHandler = () => {


    useEffect(() => {
        const unsubscribe = messaging().onMessage((remoteMessage) => {
            const { notification, messageId } = remoteMessage;
            if (Platform.OS == "ios") {
                alert(JSON.stringify(remoteMessage))
                Toast.show({
                    type: 'success',
                    text1: notification.title,
                    text2: notification.body,
                });
            } else {
                Toast.show({
                    type: 'success',
                    text1: notification.title,
                    text2: notification.body,
                });
            }
        });
        return unsubscribe;
    }, []);
    return null;
};

export default ForegroundHandler;
