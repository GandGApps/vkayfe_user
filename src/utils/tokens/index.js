import AsyncStorage from '@react-native-community/async-storage';

export async function setTokens(newTokens) {
  try {
    await AsyncStorage.setItem('accessToken', newTokens);
    //await AsyncStorage.setItem('refreshToken', newTokens.refreshToken)
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function checkTokens() {
  try {
    return await AsyncStorage.getItem('accessToken');
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function removeTokens() {
  try {
    await AsyncStorage.removeItem('accessToken');
    return true;
  } catch (exception) {
    return false;
  }
}
