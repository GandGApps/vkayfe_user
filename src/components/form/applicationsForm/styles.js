import {Colors, globalStyles} from '../../../constants';
import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight, globalWidth} from '../../index';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  applicationsContainer: {
    marginHorizontal: globalWidth(20),
    paddingHorizontal: globalWidth(13),
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
    marginBottom: globalHeight(9),
    paddingVertical: globalHeight(9),
    flexDirection: 'row',
  },
  imgForm: {
    borderRadius: 8,
    width: globalWidth(93),
    height: globalHeight(103),
    resizeMode: 'contain',
  },
  rowCont: {
    justifyContent: 'space-between',
    marginLeft: globalWidth(-20),
  },
  applContent: {
    marginBottom: globalHeight(35),
  },
  logo: {
    width: globalWidth(25),
    height: globalHeight(27),
    borderRadius: 4,
    resizeMode: 'contain',
  },
  likeIc: {
    width: globalWidth(20),
    height: globalHeight(20),
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    top: globalWidth(10),
  },
  applicationsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width - globalWidth(120),
  },
  shopCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  foot: {
    paddingLeft: globalWidth(10),
  },
  name1: {
    paddingLeft: globalWidth(5),
    fontSize: globalWidth(12),
  },
  name: {
    fontSize: globalWidth(14),
  },
  price: {
    marginRight: globalHeight(15),
  },
});
