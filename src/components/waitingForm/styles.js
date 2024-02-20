import {Colors} from '../../constants';
import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight, globalWidth} from '../dimensions';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginVertical: globalHeight(20),
  },

  chooseTextBold: {
    textDecorationLine: 'underline',
    marginBottom: globalHeight(18),
  },
  titleText: {
    maxWidth: globalWidth(283),
    marginTop: globalHeight(30),
  },
  characterContainer: {
    alignItems: 'center',
  },
  character: {
    width: globalWidth(211),
    height: globalWidth(211),
    resizeMode: 'contain',
  },
});
