import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from '../../../../constants';
import {globalHeight, globalWidth} from '../../../../components';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  placeHolderImageViewText: {
    marginHorizontal: globalWidth(10),
    paddingHorizontal: globalWidth(4),
    marginVertical: globalHeight(5),

    borderRadius: 8,
  },
  content: {},
  left: {
    alignItems: 'flex-start',
    marginRight: globalWidth(40),
    backgroundColor: '#136A8A',
    borderRadius: 8,
  },
  right: {
    alignItems: 'flex-end',
    marginLeft: globalWidth(40),
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
    marginHorizontal: globalWidth(5),
  },
  chatIcon: {
    width: globalWidth(25),
    height: globalWidth(25),
    resizeMode: 'contain',
    marginLeft: globalWidth(10),
  },
  chatInputView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: globalHeight(10),
  },
  textInputChat: {
    backgroundColor: '#F7F7FC',
    width: '80%',
    borderWidth: 1,
    borderRadius: 8,
    color: 'black',
    marginHorizontal: 0,
    paddingHorizontal: 10,
  },

  placeholderText: {
    marginVertical: globalHeight(5),
    marginHorizontal: globalHeight(5),
    color: Colors.black,
    textAlign: 'left',
  },
  backContainer: {
    marginTop: Platform.OS === 'ios' ? globalWidth(40) : 5,
  },
  imgMsg: {
    width: globalWidth(200),
    height: globalWidth(200),
    resizeMode: 'contain',
  },
  placeHolderImageViewImg: {
    marginHorizontal: globalWidth(10),
    paddingHorizontal: globalWidth(4),
    marginVertical: globalHeight(5),
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
});
