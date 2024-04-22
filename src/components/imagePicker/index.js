import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight} from '../dimensions';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Запрос на использование камеры',
        message: 'Дать доступ к приложению Камера? ',
        buttonNeutral: 'Спросить позже',
        buttonNegative: 'Отмена',
        buttonPositive: 'Да',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
};

export function ChooseImage(callBack) {
  Alert.alert(
    '',
    'Добавьте фотографии из галереи или сделайте новое фото',
    [
      {
        text: 'Открыть галерею',
        onPress: () => {
          launchImageLibrary(
            {
              mediaType: 'photo',
              includeBase64: true,
              quality: 1,
            },
            response => {
              if (!response.didCancel) {
                Alert.alert(
                  'Подтверждение',
                  'Вы уверены, что хотите загрузить это фото?',
                  [
                    {
                      text: 'Отмена',
                      style: 'cancel',
                    },
                    {
                      text: 'Да',
                      onPress: () => callBack(response),
                    },
                  ],
                  {cancelable: false},
                );
              }
            },
          );
        },
      },
      {
        text: 'Сделать фото',
        onPress: async () => {
          if (Platform.OS === 'ios') {
            await launchCamera(
              {
                storageOptions: {privateDirectory: true},
                cropping: true,
                mediaType: 'photo',
                includeBase64: true,
                quality: 1,
              },
              response => {
                if (!response.didCancel) {
                  callBack(response);
                }
              },
            );
          } else {
            if (await requestCameraPermission()) {
              await launchCamera(
                {
                  storageOptions: {privateDirectory: true},
                  cropping: true,
                  mediaType: 'photo',
                  includeBase64: true,
                  quality: 1,
                },
                response => {
                  if (!response.didCancel) {
                    Alert.alert(
                      'Подтверждение',
                      'Вы уверены, что хотите загрузить эти фото?',
                      [
                        {
                          text: 'Отмена',
                          style: 'cancel',
                        },
                        {
                          text: 'Да',
                          onPress: () => callBack(response),
                        },
                      ],
                      {cancelable: false},
                    );
                  }
                },
              );
            } else {
              await requestCameraPermission();
            }
          }
        },
      },
    ],
    {cancelable: true},
  );
}
export async function MultipleImage(callBack) {
  await launchImageLibrary(
    {
      selectionLimit: 5,
      mediaType: 'photo',
      includeBase64: false,
      quality: 1,
    },
    response => {
      if (!response.didCancel) {
        callBack(response.assets);
      }
    },
  );
}
