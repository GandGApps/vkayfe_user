import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../../constants';
import {globalHeight, globalWidth} from '../../../../components';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: globalHeight(10),
  },

  headerContainer: {
    marginBottom: globalHeight(30),
  },
  titleCategory: {
    marginBottom: globalHeight(15),
    marginLeft: globalWidth(20),
  },
  containerCategory: {
    borderBottomWidth: 1,
    borderColor: Colors.borderGray,
    marginBottom: globalHeight(23),
    paddingBottom: globalHeight(12),
  },

  contentCategory: {
    marginLeft: globalWidth(20),
  },
  category: {
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.filterBackground,
    marginHorizontal: globalHeight(20),
    paddingVertical: globalHeight(12),
    paddingHorizontal: globalWidth(12),
  },
  inpSmall: {
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.filterBackground,
    marginHorizontal: globalHeight(0),
    width: width / 2 - globalWidth(40),
  },
  closeIcon: {
    resizeMode: 'contain',
    width: globalHeight(17),
    height: globalWidth(17),
  },
  containerBtn: {
    marginVertical: globalHeight(15),
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: globalWidth(20),
  },
});
