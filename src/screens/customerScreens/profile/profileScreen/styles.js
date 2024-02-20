import {StyleSheet, Dimensions, Platform} from 'react-native';
import {globalHeight, globalWidth} from '../../../../components';
import {Colors} from '../../../../constants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: Platform.OS === 'ios' ? 0 : globalHeight(38),
    paddingBottom: globalHeight(22),
    backgroundColor: Colors.blueBackground,
    paddingHorizontal: globalWidth(20),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: globalWidth(35),
    paddingRight: globalWidth(20),
    paddingVertical: globalHeight(15),
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },

  shopIcon: {
    width: globalWidth(65),
    height: globalWidth(65),
    borderRadius: 8,
    marginRight: globalWidth(11),
  },
  RightIcon: {
    width: globalWidth(10),
    height: globalHeight(16),
    resizeMode: 'contain',
  },
  activeTextHeader: {
    marginBottom: globalHeight(5),
  },
  activeText: {
    color: Colors.NoActiveColor,
    marginBottom: globalHeight(5),
  },
  activeInActiveContainer: {
    backgroundColor: '#FFE6FC',
    borderBottomWidth: 0,
  },

  placeIcon: {
    width: globalWidth(12),
    height: globalHeight(16),
    resizeMode: 'contain',
    marginRight: globalWidth(9),
    tintColor: '#0BC5BA',
  },
  shopName: {
    marginBottom: globalHeight(15),
  },
  idText: {
    marginBottom: globalHeight(8),
  },
  bottomIcon: {
    width: globalWidth(6),
    height: globalHeight(8),
    resizeMode: 'contain',
    marginLeft: globalWidth(3),
  },
  changeShop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
