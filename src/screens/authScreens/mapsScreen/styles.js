import {Colors} from '../../../constants';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {globalHeight, globalWidth} from '../../../components';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  cont: {
    flex: 1,
    flexDirection: 'column',
    elevation: 10,
    borderRadius: 15,
    shadowRadius: 15,
    shadowOpacity: 0.34,
    shadowColor: Colors.black,
    backgroundColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  back_button_View: {
    // position:'absolute',
    zIndex: 999999,
    right: globalWidth(0),
    top: globalHeight(5),
    alignItems: 'flex-end',
    width: width,
    height: globalHeight(25),
    marginRight: globalWidth(20),
    marginVertical: globalHeight(10),
  },
  back_button: {
    width: globalHeight(20),
    height: globalHeight(20),
    resizeMode: 'contain',
    marginRight: globalWidth(15),
  },

  input: {
    backgroundColor: 'white',
    paddingLeft: globalWidth(10),
    width: width - globalWidth(80),
    marginTop: globalHeight(20),
  },
  btn: {
    marginVertical: globalHeight(30),
    width: width - globalWidth(75),
  },

  header: {
    marginTop: Platform.OS === 'ios' ? 30 : 0,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,

    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? globalHeight(10) : 0,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  headerCont: {
    width: width,
    backgroundColor: 'white',
  },
  footerCont: {
    // position:'absolute',
    width: width,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: globalHeight(10),
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
  },
  btnFooter: {
    width: width - globalWidth(20),
  },
  absCont: {
    position: 'absolute',
    zIndex: 10,
    top: globalHeight(50),
    backgroundColor: 'white',
    width: width - globalWidth(38),
    height: height - globalHeight(50),
  },
  contentMyDetails: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColorLight,
    marginVertical: globalHeight(17),
    marginHorizontal: globalWidth(20),
  },
  contentMyDetailsText: {
    color: Colors.black,
    marginBottom: globalHeight(8),
  },
  searchCont: {
    backgroundColor: Colors.tifany,
    paddingVertical: globalHeight(5),
    paddingHorizontal: globalWidth(5),
    borderRadius: 6,
    position: 'absolute',
    right: globalWidth(18),
    bottom: globalHeight(4),
    zIndex: 10,
  },
  searchIcon: {
    width: globalWidth(22),
    height: globalWidth(22),
    resizeMode: 'contain',
  },
  placeIcon: {
    width: globalWidth(18),
    height: globalHeight(21),
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 10,
    left: globalWidth(0),
    bottom: globalHeight(15),
    tintColor: '#0BC5BA',
  },
  viewSearch: {
    marginHorizontal: globalWidth(30),
  },
  complView: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
    paddingVertical: globalWidth(10),
    marginHorizontal: globalWidth(10),
  },
});
