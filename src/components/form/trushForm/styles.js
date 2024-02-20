import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../constants';
import {globalHeight, globalWidth} from '../../index';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  applicationsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColorLight,
    paddingTop: globalHeight(19),
    position: 'relative',
  },
  changeContent: {
    marginLeft: globalWidth(21),
    marginRight: globalWidth(29),
  },
  imgForm: {
    width: globalWidth(85),
    height: globalHeight(100),
    marginTop: globalHeight(13),
    marginBottom: globalHeight(37),
    borderRadius: 8,
  },
  textCont: {
    marginLeft: globalWidth(8),
  },
  priceText: {
    marginTop: globalHeight(11),
    width: globalWidth(100),
  },
  positView: {
    position: 'absolute',
    right: globalWidth(29),
    bottom: globalHeight(47),
    zIndex: 10,
  },

  btnAdd: {
    width: globalWidth(28),
    height: globalWidth(28),
  },
  imgPlusMinus: {
    width: globalWidth(28),
    height: globalWidth(28),
    resizeMode: 'contain',
  },
  addCont: {
    textAlign: 'center',
    marginBottom: globalHeight(30),
  },

  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: globalHeight(10),
  },
  foot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
  },
  textCount: {
    marginHorizontal: globalWidth(5),
  },
  deleteIcon: {
    width: globalWidth(17),
    height: globalHeight(17),
    resizeMode: 'contain',
  },
  deleteCont: {
    width: globalWidth(30),
    height: globalHeight(30),
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: globalWidth(20),
    top: globalHeight(20),
    zIndex: 1,
  },
});
