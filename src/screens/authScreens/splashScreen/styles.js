import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight, globalWidth} from '../../../components';
import {Colors} from '../../../constants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  splashContainer: {
    paddingHorizontal: globalWidth(15),
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    width: globalWidth(82),
    height: globalHeight(250),
    backgroundColor: Colors.pink,
  },
  giftImg: {
    position: 'absolute',
    resizeMode: 'contain',
    maxWidth: globalWidth(200),
    maxHeight: globalWidth(200),
  },
  giftText: {
    resizeMode: 'contain',
    width: globalWidth(278),
    height: globalWidth(112),
  },
  platformText: {
    marginBottom: globalHeight(22),
  },
  giftImgContainer: {
    alignItems: 'center',
    marginVertical: globalHeight(30),
  },
  TextInformation: {
    fontWeight: '400',
    color: Colors.gray,
    fontSize: globalWidth(16),
    marginLeft: globalWidth(11),
  },
  formInformation: {
    justifyContent: 'flex-start',
    marginLeft: globalWidth(56),
  },
  informationIcon: {
    resizeMode: 'contain',
    width: globalWidth(20),
    height: globalWidth(20),
  },
  buttonContainer: {
    marginVertical: globalHeight(40),
  },
  informationContainer: {
    flex: 1,
    height: globalHeight(120),
    justifyContent: 'space-between',
  },
});
