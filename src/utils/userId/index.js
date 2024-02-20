import AsyncStorage from '@react-native-community/async-storage';

export async function setUserId(userId) {
  try {
    await AsyncStorage.setItem('userId', userId);
    //await AsyncStorage.setItem('refreshToken', newTokens.refreshToken)
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function checkUserId() {
  try {
    return await AsyncStorage.getItem('userId');
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function removeUserId() {
  try {
    await AsyncStorage.removeItem('userId');
    return true;
  } catch (exception) {
    return false;
  }
}
