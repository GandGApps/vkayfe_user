import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from '../../../../constants';
import {globalHeight, globalWidth} from '../../../../components';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  placeHolderImageViewText: {
    marginHorizontal: globalWidth(10),
    paddingHorizontal: globalWidth(4),
    marginVertical: globalHeight(10),

    borderRadius: 8,
  },
  content: {},
  left: {
    minWidth : globalWidth(60),
    backgroundColor: '#136A8A',
    borderRadius: 8,
  },
  right: {
    minWidth : globalWidth(60),
    backgroundColor: 'gray',
    borderRadius: 8,
  },
  chatScrool: {
    flex: 1,
    backgroundColor: 'rgb(250, 250, 250)',
  },
  chatPlusImg: {
    width: globalWidth(25),
    height: globalWidth(25),
    marginHorizontal: globalWidth(13),
  },
  chatIcon: {
    width: globalWidth(25),
    height: globalWidth(25),
    resizeMode: 'contain',
    marginLeft: globalWidth(20),
  },
  chatInputView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: globalHeight(25),
  },
  textInputChat: {
    backgroundColor: '#F7F7FC',
    width: '70%',
    borderWidth: 1,
    borderRadius: 8,
    color: 'black',
    marginHorizontal: 0,
    paddingHorizontal: 10,
  },
  imageView: {
    backgroundOverlay: 'rgba(0, 0, 0, 0)' // Прозрачный фон
  },
  placeholderText: {
    marginVertical: globalHeight(5),
    marginHorizontal: globalHeight(5),
    color: Colors.black,
    textAlign: 'left',
  },
  backContainer: {
    marginTop: Platform.OS === 'ios' ? globalWidth(60) : 5,
    marginBottom: 10,
  },
  imgMsg: {
    width: globalWidth(200),
    height: globalWidth(200),
    backgroundColor: 'transparent',
    overlayColor: 'transparent',
    borderRadius: 8,


  },
  placeHolderImageViewImg: {
    marginHorizontal: globalWidth(10),
    paddingHorizontal: globalWidth(4),
    marginVertical: globalHeight(5),
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
