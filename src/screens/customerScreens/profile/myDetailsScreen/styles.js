import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight, globalWidth} from '../../../../components';
import {Colors} from '../../../../constants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  contentMyDetailsAll: {
    flex: 1,
    justifyContent: 'space-between',
  },
  stylesBack: {
    marginTop: globalWidth(14),
    marginBottom: globalHeight(39),
  },
  contentMyDetails: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColorLight,
    marginBottom: globalHeight(34),
    marginHorizontal: globalWidth(20),
  },
  contentMyDetailsText: {
    color: Colors.gray,
    marginBottom: globalHeight(8),
  },
  contentMyDetailsPass: {
    marginBottom: 0,
  },
  btnPassword: {
    marginHorizontal: globalWidth(20),
    alignItems: 'flex-end',
    marginBottom: globalHeight(16),
  },
  btnPasswordText: {
    fontSize: globalWidth(12),

    color: Colors.pink,
  },
  appBtnContainer: {
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  appBtnText: {
    color: Colors.black,
  },
  appBtnView: {
    borderTopWidth: 1,
    paddingVertical: globalHeight(25),
    borderColor: Colors.borderGray,
  },
  textUnderline: {
    fontSize: globalWidth(12),
    textDecorationLine: 'underline',
  },
  accountStateChange: {
    paddingBottom: globalHeight(12),
  },
});
