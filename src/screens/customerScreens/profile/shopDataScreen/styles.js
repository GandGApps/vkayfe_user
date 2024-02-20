import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight, globalWidth} from '../../../../components';
import {Colors} from '../../../../constants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  headerContainer: {
    paddingVertical: globalHeight(21),
    backgroundColor: Colors.blueBackground,
    borderBottomWidth: 1,
    borderColor: Colors.borderGray,
  },
  shopNameText: {
    fontSize: globalWidth(25),
    lineHeight: globalHeight(35),
    marginLeft: globalWidth(20),
  },
  placeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: globalHeight(11),
    marginBottom: globalHeight(17),
  },

  placeIcon: {
    width: globalWidth(12),
    height: globalHeight(16),
    resizeMode: 'contain',
    marginRight: globalWidth(9),
    tintColor: '#0BC5BA',
  },
  IdText: {
    marginLeft: globalWidth(20),
    color: Colors.gray,
  },
  shopDataContainer: {
    marginHorizontal: globalWidth(26),
  },
  scrollView: {
    paddingHorizontal: globalWidth(20),
    flexGrow: 1,
  },
  proText: {
    marginTop: globalHeight(26),
  },
  dataText: {
    marginBottom: globalHeight(7),
  },
  buttonRedContainer: {
    backgroundColor: Colors.red,
    width: globalWidth(170),
  },
  buttonWhiteText: {
    color: Colors.black,
  },
  buttonWhiteContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.titleColor,
    width: globalWidth(170),
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: globalHeight(20),
    borderTopWidth: 1,
    borderTopColor: Colors.borderGray,
  },
});
