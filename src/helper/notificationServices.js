import messaging from '@react-native-firebase/messaging';
import AsyncStorage from "@react-native-community/async-storage";

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
        //  getFcmToken()
    }
}

export const notificationListener = async() =>{

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
        console.log("backgrund state",remoteMessage.notification)
    });
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
                console.log("remote message",remoteMessage.notification)
            }
        })
}
