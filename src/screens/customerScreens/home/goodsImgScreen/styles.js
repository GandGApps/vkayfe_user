import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../../constants';
import {globalHeight, globalWidth} from '../../../../components';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  containerImg: {
    backgroundColor: Colors.titleColor,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  img: {
    width: width,
    height: height / 2.5,
  },
  bckCont: {
    position: 'absolute',
    top: globalHeight(30),
    left: globalWidth(30),
    zIndex: 50,
  },
  bckImg: {
    width: globalWidth(20),
    height: globalHeight(26),
    resizeMode: 'contain',
  },
  containerImgCarousel: {
    width: width,
    height: height / 2.4,
    justifyContent: 'space-between',
  },
  colorText: {
    fontSize: globalWidth(20),
    color: Colors.white,
    position: 'absolute',
    bottom: globalHeight(30),
  },
  contHeader: {
    position: 'absolute',
    zIndex: 15000,
    width: width,
    top: 0,
  },
  likebtn: {
    zIndex: 900000000,
    position: 'absolute',
    right: 10,
    top: globalHeight(19),
    width: globalWidth(45),
    height: globalHeight(52),
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleLik: {
    width: globalWidth(45),
    height: globalHeight(52),
    borderRadius: 100,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeIc: {
    width: globalWidth(35),
    height: globalHeight(35),
    resizeMode: 'contain',
  },
});
