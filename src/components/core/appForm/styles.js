import {Colors} from '../../../constants';
import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight, globalWidth} from '../../dimensions';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  formContainer: {
    elevation: 10,
    borderRadius: 15,
    shadowRadius: 15,
    shadowOpacity: 0.34,
    shadowColor: Colors.black,
    backgroundColor: Colors.white,
    width: width - globalWidth(30),
    marginBottom: globalHeight(50),
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  formLine: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: globalHeight(15),
    backgroundColor: Colors.pink,
  },
});
