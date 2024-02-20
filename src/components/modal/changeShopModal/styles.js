import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight, globalWidth} from '../../dimensions';
import {Colors} from '../../../constants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
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
  back_button_View: {
    alignItems: 'flex-end',
    marginRight: globalWidth(20),
    marginBottom: globalHeight(10),
  },
  back_button: {
    width: globalHeight(20),
    height: globalHeight(20),
    resizeMode: 'contain',
  },
  shopIcon: {
    width: globalWidth(50),
    height: globalWidth(50),
    borderRadius: 8,
    marginHorizontal: globalWidth(5),
  },
  containerHeaderText: {
    justifyContent: 'space-between',
  },
  magazine: {
    fontSize: globalHeight(12),
  },
  placeIcon: {
    width: globalWidth(7),
    height: globalHeight(10),
    resizeMode: 'contain',
    marginRight: globalWidth(5),
  },
  placeText: {
    fontSize: globalHeight(12),
  },
  idText: {
    marginBottom: globalHeight(8),
  },
  containerRight: {
    position: 'absolute',
    right: globalWidth(10),
    top: globalHeight(12),
    alignItems: 'flex-end',
  },
  headerShop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: Colors.borderGray,
    position: 'relative',
  },
  contentShop: {
    width: '70%',
  },
});
