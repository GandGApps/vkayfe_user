import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../colors';
import {globalHeight, globalWidth} from '../../components';
import {NativeModules} from 'react-native';

// ...
import {getStatusBarHeight} from 'react-native-status-bar-height';

const {StatusBarManager} = NativeModules;
const height = StatusBarManager.HEIGHT;

export const globalStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? globalWidth(10) : 0,
  },
  flexCenter: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    color: Colors.titleColor,
    fontWeight: '500',
    fontSize: globalWidth(18),
    textAlign: 'center',
    lineHeight: globalHeight(30),
  },
  titleTextBig: {
    fontSize: globalWidth(20),
  },
  titleTextSmall: {
    fontSize: globalWidth(16),
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  titleTextSmall4: {
    fontSize: globalWidth(14),
  },
  weightBold: {
    fontWeight: '600',
  },
  weightLight: {
    fontWeight: '400',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  error: {
    marginLeft: 20,
    fontSize: 12,
    marginVertical: 5,
    color: Colors.red,
  },
});
