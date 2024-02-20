import {StyleSheet, Dimensions, Platform} from 'react-native';
import {globalHeight, globalWidth} from '../../../../components';
import {Colors} from '../../../../constants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    marginHorizontal: globalWidth(40),
    marginTop: globalHeight(19),
    marginBottom: globalHeight(41),
  },
  headerCont: {
    backgroundColor: Colors.blueBackground,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  podImg: {
    width: globalWidth(178),
    height: globalHeight(184),
    resizeMode: 'contain',
    marginBottom: globalHeight(10),
  },
  contText: {
    maxWidth: globalWidth(260),
  },
  contCont: {
    alignItems: 'center',
    marginTop: globalHeight(50),
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: Colors.borderGray,
    paddingVertical: globalHeight(20),
  },
});
