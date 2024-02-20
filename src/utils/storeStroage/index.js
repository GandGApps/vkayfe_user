import AsyncStorage from '@react-native-community/async-storage';

export async function setStore(store) {
  try {
    await AsyncStorage.setItem('store', JSON.stringify(store));
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function checkStore() {
  try {
    const a = await AsyncStorage.getItem('store');
    return JSON.parse(a);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function removeStore() {
  try {
    await AsyncStorage.removeItem('store');
    return true;
  } catch (exception) {
    return false;
  }
}
