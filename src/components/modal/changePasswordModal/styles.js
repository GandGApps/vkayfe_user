import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight, globalWidth} from '../../dimensions';
import {Colors} from '../../../constants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },
  modalContent: {
    elevation: 10,
    borderRadius: 15,
    shadowRadius: 15,
    shadowOpacity: 0.34,
    shadowColor: Colors.black,
    backgroundColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    paddingVertical: globalHeight(20),
  },
  input: {
    marginVertical: globalWidth(20),
    width: width - globalWidth(120),
  },
  back_button_View: {
    alignItems: 'flex-end',
    marginRight: globalWidth(20),
  },
  back_button: {
    width: globalHeight(20),
    height: globalHeight(20),
    resizeMode: 'contain',
  },
  content: {
    justifyContent: 'center',
  },
  error: {
    marginLeft: 20,
    fontSize: 12,
    marginVertical: 5,
    color: Colors.red,
  },
});
