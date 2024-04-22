import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight, globalWidth} from '../../../../components';
import {Colors} from '../../../../constants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.blueBackground,
  },
  addText: {
    marginLeft: globalWidth(27),
    fontWeight: '600',
    color: Colors.titleColor,
    fontSize: globalWidth(25),
    marginBottom: globalHeight(13),
    marginTop: globalHeight(13),
  },
  titleForm: {
    color: Colors.black,
    marginHorizontal: globalWidth(30),
  },
  shopContAll: {
    borderTopWidth: 1,
    borderTopColor: Colors.borderGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: globalHeight(20),
    marginVertical: globalHeight(20),
  },
  shopCont: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: globalHeight(10),
  },
  imgShop: {
    width: globalWidth(65),
    height: globalHeight(65),
    marginRight: globalWidth(5),
    resizeMode: 'stretch',
    borderRadius: 8,
    marginLeft: globalWidth(20),
  },
  inp: {
    width: globalWidth(206),
  },
  textBtn: {
    fontSize: globalWidth(12),
  },
  contBtn: {
    marginHorizontal: 0,
    width: globalWidth(123),
  },
  proCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: globalHeight(5),
    marginBottom: globalHeight(10),
  },
  footHead: {
    paddingHorizontal: globalWidth(20),
    justifyContent: 'space-between',
    paddingVertical: globalHeight(20),
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },
  proText: {
    paddingHorizontal: globalWidth(33),
    marginTop: globalHeight(10),
  },
  cont: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },
  contAdd: {
    paddingTop: globalHeight(10),
    paddingHorizontal: globalWidth(20),
  },
  text: {
    color: Colors.gray,
  },
  contButton: {
    marginVertical: globalHeight(20),
  },
  inpSmall: {
    marginHorizontal: 0,
    width: width / 3 - globalWidth(30),
  },
  flatmateCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: globalWidth(20),
    marginTop: globalWidth(10),
  },
  textCont: {
    marginHorizontal: globalWidth(20),
    marginTop: globalHeight(10),
  },
  OpenerCont: {
    marginHorizontal: globalWidth(-80),
    marginTop: globalHeight(10),
  },
  flatmateContCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: globalWidth(20),
    paddingVertical: globalHeight(10),
  },
  inpSmallLeft: {
    marginRight: globalWidth(20),
  },
  graphicContent: {
    borderBottomWidth: 1,
    borderColor: Colors.borderGray,
    height: globalHeight(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    marginRight: globalWidth(20),
  },
  inputBig: {
    borderWidth: 1,
    marginBottom: globalHeight(50),
    textAlignVertical: 'top',
    height: globalHeight(139),
    borderRadius: 8,
    marginTop: globalHeight(10),
    paddingHorizontal: globalHeight(10),
    paddingTop: globalHeight(10),
    paddingBottom: globalHeight(5),
  },
  contShp: {
    marginLeft: globalWidth(5),
  },
  addressStyle: {
    marginHorizontal: 0,
    paddingLeft: 0,
  },
  pustaText: {
    fontSize: globalWidth(25),
    marginVertical: globalHeight(20),
    marginHorizontal: globalWidth(20),
  },
  contNoData: {
    flex: 1,
    justifyContent: 'space-between',
  },
  korz: {
    width: globalWidth(134),
    height: globalHeight(117),
    resizeMode: 'contain',
  },
  korzContText: {
    marginTop: globalHeight(31),
    marginBottom: globalHeight(43),
  },
  pustCont: {
    marginHorizontal: globalWidth(60),
  },
  korzCont: {
    alignItems: 'center',
  },
  proTextActive: {
    color: '#17609F',
    paddingHorizontal: globalWidth(33),
  },
  promoErr: {
    paddingHorizontal: globalWidth(16),
  },
  imgForm: {
    width: globalWidth(85),
    height: globalHeight(85),
    marginTop: globalHeight(13),
    resizeMode: 'contain',
  },
  imgForm2: {
    width: globalWidth(85),
    height: globalHeight(85),
    marginTop: globalHeight(5),
    resizeMode: 'contain',
  },
  applicationsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColorLight,
    position: 'relative',
  },
  changeContent: {
    marginLeft: globalWidth(21),
    marginRight: globalWidth(29),
  },
  priceText: {
    marginTop: globalHeight(11),
  },
  otkritka: {
    paddingHorizontal: 0,
    marginHorizontal: 0,
    width: width / 2,
  },
});
