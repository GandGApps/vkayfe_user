import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../../constants';
import {globalHeight, globalWidth} from '../../../../components';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  filterContainer: {
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.tifany,
    paddingVertical: globalHeight(8),
    paddingHorizontal: globalHeight(13),
    width: width / 2 - globalWidth(40),
  },
  filterIconStyle: {
    resizeMode: 'contain',
    width: globalWidth(20),
    height: globalHeight(16),
  },
  HeaderFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: globalHeight(10),
    marginHorizontal: globalWidth(20),
  },
  winIconStyle: {
    width: globalWidth(12),
    height: globalWidth(16),
    resizeMode: 'contain',
  },
  headerFooterText: {
    marginLeft: globalWidth(4),
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: globalHeight(20),
    marginHorizontal: globalWidth(15),
  },
  headerSearch: {
    paddingVertical: globalWidth(10),
    backgroundColor: Colors.blueBackground,
  },
  iconTopBottom: {
    resizeMode: 'contain',
    width: globalWidth(16),
    height: globalWidth(16),
  },
  contView: {
    paddingHorizontal: globalWidth(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
