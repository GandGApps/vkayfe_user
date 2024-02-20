import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight, globalWidth} from '../../../../components';
import {Colors} from '../../../../constants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: globalHeight(14),
  },
  containerCategory: {
    marginTop: globalHeight(23),
    paddingBottom: globalHeight(15),
  },
  titleCategory: {
    marginBottom: globalHeight(15),
    marginLeft: globalWidth(20),
  },
  appButtonContainer: {
    borderTopWidth: 1,
    borderTopColor: Colors.borderGray,
    paddingVertical: globalHeight(26),
  },
  choosePhotoText: {
    color: Colors.black,
    marginTop: 7,
  },
  btnStyleDrop: {
    width: width - globalWidth(40),
    backgroundColor: '#F4F4F4',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.borderGray,
    textAlign: 'left',
  },
  dropCont: {
    alignItems: 'center',
    marginBottom: globalHeight(20),
  },
});
