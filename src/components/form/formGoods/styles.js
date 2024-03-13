import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../constants';
import {globalHeight, globalWidth} from '../../index';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  toggleSwitch: {
    flexDirection: 'row',
  },
  toggleContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.borderGray,
    paddingVertical: globalHeight(10),
    marginHorizontal: globalWidth(-11),
  },
  imgFormCont: {
    alignItems: 'center',
  },
  containerForm: {
    borderRadius: 8,
    marginBottom: globalHeight(10),
    width: width / 2 - globalWidth(30),
    marginHorizontal: globalWidth(7),
    paddingHorizontal: globalWidth(5),
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  imgForm: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    width: globalWidth(165),
    height: globalHeight(168),
    marginBottom: globalHeight(7),
  },
  text: {
    marginVertical: globalWidth(2),
  },
  formContent: {
    marginHorizontal: globalWidth(9),
  },
  goodsText: {
    marginBottom: globalHeight(7),
  },
  formFooterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: globalHeight(22),
    justifyContent: 'space-between',
    marginBottom: globalHeight(14),
  },
  likeIc: {
    width: globalWidth(20),
    height: globalHeight(20),
    resizeMode: 'contain',
  },
  rowLikesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
