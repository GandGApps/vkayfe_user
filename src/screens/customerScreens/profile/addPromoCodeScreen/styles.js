import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from '../../../../constants';
import {globalHeight, globalWidth} from '../../../../components';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  cont: {
    marginVertical: globalHeight(20),
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: Colors.borderGray,
    paddingVertical: globalHeight(20),
  },
  headerText: {
    marginVertical: globalHeight(16),
    marginLeft: globalWidth(20),
  },
  sale: {
    marginTop: globalHeight(64),
    marginLeft: globalWidth(20),
    color: Colors.pink,
  },
  input: {
    width: width / 2,
  },
  contentCont: {
    paddingHorizontal: globalWidth(20),
  },
  calendarIcon: {
    height: globalHeight(15),
    width: globalWidth(15),
    resizeMode: 'contain',
    marginLeft: globalWidth(15),
  },
  calCont: {
    borderBottomWidth: 1,
    borderColor: Colors.lightGray,
    paddingVertical: globalHeight(9),
  },
  headerTextPromoCode: {
    marginVertical: globalHeight(16),
    marginLeft: globalWidth(20),
  },
  inpStyle: {
    marginLeft: globalWidth(19),
  },
  headerTextData: {
    marginVertical: globalHeight(16),
  },
  error: {
    marginLeft: globalWidth(20),
    fontSize: 12,
    marginVertical: 5,
    color: Colors.red,
  },
});
