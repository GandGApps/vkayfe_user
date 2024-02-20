import {Colors} from '../../../constants';
import {StyleSheet, Dimensions} from 'react-native';
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
    height: globalHeight(85),
    marginTop: globalHeight(13),
    marginBottom: globalHeight(37),
  },
  textCont: {
    marginLeft: globalWidth(8),
  },
  priceText: {
    marginTop: globalHeight(11),
  },
  positView: {
    position: 'absolute',
    right: globalWidth(29),
    bottom: globalHeight(47),
    zIndex: 10,
  },
});
