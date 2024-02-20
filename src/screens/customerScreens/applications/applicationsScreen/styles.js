import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight, globalWidth} from '../../../../components';
import {Colors} from '../../../../constants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: globalHeight(13),
    backgroundColor: Colors.blueBackground,
    marginBottom: globalHeight(17),
  },
  headerFooter: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: globalWidth(30),
    paddingHorizontal: globalWidth(20),
  },
  headerFooterText: {
    color: Colors.gray,
    width: width / 2 - globalWidth(40),
  },
  activeText: {
    borderBottomWidth: 1,
    paddingBottom: globalWidth(7),
    color: Colors.titleColor,
  },
  activeTextContent: {
    color: Colors.black,
  },
  container: {
    marginBottom: globalHeight(23),
  },
  textZakaz: {
    marginLeft: globalWidth(20),
  },
  imgForm: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    width: globalWidth(165),
    height: globalHeight(168),
    marginBottom: globalHeight(7),
  },
});
