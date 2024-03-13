import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../../constants';
import {globalHeight, globalWidth} from '../../../../components';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  inputBig: {
    paddingLeft : 20,
    paddingTop: 10,
    borderWidth: 1,
    paddingBottom: 0,
    marginBottom: globalHeight(50),
    textAlignVertical: 'top',
    height: globalHeight(139),
    borderRadius: 8,
  },
  cont: {
    justifyContent: 'space-between',
  },
  footCont: {
    paddingVertical: globalHeight(20),
    borderTopWidth: 1,
    borderTopColor: Colors.borderGray,
  },
  priceText: {
    marginHorizontal: globalWidth(21),
    marginTop: globalHeight(30),
  },
});
