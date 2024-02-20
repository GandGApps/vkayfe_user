import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../constants';
import {globalHeight, globalWidth} from '../../index';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  cont: {
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: globalWidth(20),
    marginVertical: globalWidth(5),
  },
  content: {
    paddingLeft: globalWidth(20),
    paddingRight: globalWidth(9),
  },
  headerCont: {
    justifyContent: 'space-between',
    marginTop: globalHeight(8),
    marginBottom: globalHeight(13),
  },
  deleteIconStyle: {
    height: globalHeight(18),
    width: globalWidth(18),
    marginLeft: globalWidth(9),
    resizeMode: 'contain',
  },
  sale: {
    color: Colors.pink,
  },
  state: {
    color: Colors.red,
  },
  promoText: {
    marginTop: globalHeight(8),
    marginBottom: globalHeight(18),
  },
  line: {
    height: globalHeight(15),
    backgroundColor: Colors.pink,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
  },
});
