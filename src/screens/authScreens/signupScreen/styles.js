import {Colors} from '../../../constants';
import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight, globalWidth} from '../../../components';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    position: 'relative',
  },
  scrollContainer: {
    paddingBottom: globalHeight(40),
  },
  headerContainer: {
    position: 'relative',
  },
  pinkMonster: {
    width: width,
    height: height / 2,
  },
  lineImg: {
    marginTop: -1,
    width: globalWidth(82),
  },
  formContainer: {
    left: 0,
    right: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: height / 2 + globalHeight(-47),
  },
  backContainer: {
    zIndex: 1,
    position: 'absolute',
    top: globalHeight(20),
  },
  linePink: {
    width: 82,
    height: '100%',
    borderWidth: 1,
  },
  linePinkContainer: {
    flex: 1,
    borderWidth: 1,
    height: height / 2,
  },
  formHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: globalHeight(28),
  },
  giftIconPink: {
    width: globalWidth(29),
    height: globalWidth(29),
  },
  titleForm: {
    marginLeft: globalWidth(9),
  },

  SignInTextBold: {
    textDecorationLine: 'underline',
  },
  footerContainer: {
    marginVertical: globalHeight(32),
  },
  inputContainer: {
    marginVertical: globalHeight(20),
  },
  input: {
    marginVertical: globalWidth(10),
  },

  error: {
    marginLeft: globalWidth(20),
    fontSize: 12,
    marginVertical: 5,
    color: Colors.red,
  },
  choosePhotoText: {
    color: Colors.black,
    marginTop: 7,
  },

  btnStyleDrop: {
    width: width - globalWidth(80),
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderRadius: 6,
    borderColor: Colors.borderGray,
    textAlign: 'left',
  },
  dropCont: {
    alignItems: 'center',
    marginVertical: globalHeight(10),
  },
});
