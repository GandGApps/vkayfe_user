import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../constants';
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
  rowCont: {
    justifyContent: 'space-between',
  },
  applContent: {
    marginBottom: globalHeight(10),
    marginTop: globalHeight(13),
  },
  logo: {
    width: globalWidth(19),
    height: globalHeight(19),
    resizeMode: 'contain',
  },
  likeIc: {
    width: globalWidth(20),
    height: globalHeight(20),
    resizeMode: 'contain',
    position: 'absolute',
    right: globalWidth(20),
    top: globalWidth(20),
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
    color: '#213F50',
  },
  magazine: {
    color: Colors.gray,
    marginBottom: globalHeight(5),
  },
});
