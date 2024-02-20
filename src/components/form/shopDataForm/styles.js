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
  name: {
    lineHeight: 17,
  },
  imgForm: {
    borderRadius: 8,
    width: globalWidth(65),
    height: globalHeight(75),
    resizeMode: 'contain',
  },
  rowCont: {
    justifyContent: 'space-between',
    marginLeft: globalWidth(-20),
  },
  applContent: {
    marginBottom: globalHeight(0),
    marginTop: globalHeight(0),
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
  magazine: {
    color: '#213F50',
    marginVertical: globalHeight(6),
    lineHeight: globalWidth(14),
  },
  name1: {
    fontSize: globalWidth(12),
    lineHeight: globalWidth(13),
    marginTop: globalHeight(12),
  },
});
