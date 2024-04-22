import {StyleSheet, Dimensions, Platform} from 'react-native';
import {globalHeight, globalWidth} from '../../../../components';
import {Colors} from '../../../../constants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.blueBackground,
  },
  back: {
    marginLeft: 0,
  },
  headerTextContainer: {
    paddingVertical: globalHeight(30),
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },
  headerPadding: {
    paddingHorizontal: globalWidth(20),
    marginTop: Platform.OS === 'ios' ? globalWidth(20) : 0,
    paddingTop: globalHeight(13),
  },
   headerPaddingText: {
    paddingHorizontal: globalWidth(20),
    marginTop: Platform.OS === 'ios' ? globalWidth(0) : 0,
    paddingTop: globalHeight(1),
  },
  contentStyleText: {
    marginVertical: globalHeight(4),
  },
  between: {
    justifyContent: 'space-between',
  },
  countryView: {
    marginVertical: globalHeight(14),
  },
  headerBorderWidth: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },
  contData: {
    marginBottom: globalHeight(23),
  },
  priceView: {
    paddingVertical: globalHeight(26),
    backgroundColor: Colors.backgroundBLightBlue,
    borderBottomColor: Colors.borderGray,
    borderBottomWidth: 1,
    paddingHorizontal: globalWidth(20),
  },
  messageIcon: {
    width: globalWidth(40),
    height: globalHeight(38),
    marginLeft: globalWidth(10),
    resizeMode: 'contain',
  },
  footerCont: {
    paddingVertical: globalHeight(20),
  },
  choosePhotoText: {
    color: Colors.black,
    marginTop: globalHeight(7),
  },
  btnStyleDrop: {
    width: '100%',
    backgroundColor: Colors.tifany,
    borderRadius: 8,
  },
  dropCont: {
    width: width - globalWidth(80),
  },
  buttonWhiteText: {
    color: Colors.black,
  },
  buttonWhiteContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.titleColor,
  },
  shopContAll: {
    borderTopWidth: 1,
    borderTopColor: Colors.borderGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
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
    resizeMode: 'contain',
    borderRadius: 8,
    marginLeft: globalWidth(20),
  },
  ops: {
    marginBottom: globalHeight(7),
  },
  status: {
    textAlign: 'right',
  },
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
    height: globalHeight(85),
    marginTop: globalHeight(13),
    marginBottom: globalHeight(37),
    resizeMode: 'contain',
  },
  textCont: {
    marginLeft: globalWidth(8),
  },
  priceText: {
    marginTop: globalHeight(11),
  },
  marginToBoom: {
    marginBottom: globalHeight(20),
  },
  marginToTop: {
    marginTop: globalHeight(5),

  },
});
