import AsyncStorage from '@react-native-community/async-storage';

export async function setCountry(Country) {
  try {
    await AsyncStorage.setItem('Country', JSON.stringify(Country));
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function checkCountry() {
  try {
    const a = await AsyncStorage.getItem('Country');
    return JSON.parse(a);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function removeStore() {
  try {
    await AsyncStorage.removeItem('Country');
    return true;
  } catch (exception) {
    return false;
  }
}
