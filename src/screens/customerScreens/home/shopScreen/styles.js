import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../../constants';
import {globalHeight, globalWidth} from '../../../../components';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    paddingTop: globalHeight(20),
    backgroundColor: Colors.backgroundBLightBlue,
  },
  scroll: {
    backgroundColor: Colors.backgroundBLightBlue,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.backgroundBLightBlue,
  },
  shopCont: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: globalHeight(20),
    backgroundColor: Colors.backgroundBLightBlue,
  },
  imgShop: {
    width: globalWidth(65),
    height: globalHeight(75),
    marginRight: globalWidth(5),
    resizeMode: 'contain',
    marginLeft: globalWidth(20),
    borderRadius: 8,
  },
  ops: {
    marginBottom: globalHeight(7),
  },
  headerContainer: {
    paddingTop: globalHeight(13),
    backgroundColor: Colors.blueBackground,
    paddingLeft: globalWidth(27),
    paddingRight: globalWidth(17),
  },
  headerFooter: {
    justifyContent: 'space-between',
    paddingTop: globalWidth(43),
    paddingHorizontal: globalWidth(20),
    backgroundColor: Colors.backgroundBLightBlue,
  },
  onas: {
    backgroundColor: Colors.backgroundBLightBlue,
    paddingHorizontal: globalWidth(20),
  },
  headerFooterText: {
    color: Colors.gray,
  },
  activeText: {
    borderBottomWidth: 1,
    paddingBottom: globalWidth(7),
    color: Colors.titleColor,
  },
  activeTextContent: {
    color: Colors.black,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: globalHeight(10),
  },
  formContent: {
    flex: 1,
    alignItems: 'flex-start',
    width: width - globalWidth(30),
  },
  text: {
    marginLeft: globalWidth(23),
    fontWeight: '600',
    color: Colors.titleColor,
    fontSize: globalWidth(25),
  },
  placeIcon: {
    width: globalWidth(16),
    height: globalHeight(16),
    resizeMode: 'contain',
    marginRight: globalWidth(9),
    tintColor: '#0BC5BA',
  },
  placeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    marginBottom: globalWidth(8),
  },
  contView: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: globalHeight(17),
    borderColor: Colors.borderGray,
  },
  viewReview: {
    justifyContent: 'space-between',
    height: height / 1.5,
  },
  nameUserReview: {
    marginTop: globalHeight(10),
    marginBottom: globalHeight(5),
  },
  reviewCont: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
    paddingBottom: globalHeight(20),
  },
  viewContReview: {
    marginHorizontal: globalWidth(20),
  },
});
