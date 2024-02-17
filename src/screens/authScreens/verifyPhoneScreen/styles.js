import {StyleSheet, Dimensions, Platform} from "react-native";
import { globalHeight, globalWidth } from "../../../components";
import { Colors } from "../../../constants";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    position: "relative",
  },

  headerContainer: {
    position: "relative",
  },
  pinkMonster: {
    width: width,
    height: height / 2,
    position: "relative",
  },
  chekedIc: {
    borderRadius: 25,
    width: globalWidth(50),
    padding: globalWidth(2),
    height: globalHeight(30),
    paddingLeft: globalWidth(2),
  },
  customSwitch: {
    borderRadius: 25,
    width: globalWidth(50),
    padding: globalWidth(3),
    height: globalHeight(30),
    paddingLeft: globalWidth(2),
  },
  customDot: {
    borderRadius: 100,
    width: globalWidth(20),
    height: globalWidth(20),
  },
  lineImg: {
    marginTop: -1,
    height: height/1.5,
    width: globalWidth(82)
  },
  formContainer: {
    left: 0,
    right: 0,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    top: height / 2 + globalHeight(-47),
  },
  backContainer: {
    zIndex: 1,
    position: "absolute",
    top: Platform.OS === 'ios' ? globalHeight(50) :   globalHeight(20),
  },
  linePink: {
    width: 82,
    height: "100%",
    borderWidth: 1,
  },
  linePinkContainer: {
    flex: 1,
    borderWidth: 1,
    height: height / 2,
  },
  formHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
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
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  footerContainer: {
    marginVertical: globalHeight(32),
  },
  inputContainer: {
    marginVertical: globalHeight(20),
    marginHorizontal: globalHeight(20),

  },
  input: {
    marginVertical: globalWidth(10),
  },
  error:{
    marginLeft:20,
    fontSize:12,
    marginVertical:5,
    color:Colors.red
  },

  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30,color:'black'},
  codeFieldRoot: {marginTop: 20,color:'black'},
  cell: {
    width: globalWidth(40),
    height: globalWidth(40),
    lineHeight: 38,
    fontSize: 24,
    borderColor: Colors.borderGray,
    borderBottomWidth:1,

    textAlign: 'center',
      color:'black'
  },
  focusCell: {
    borderColor: '#000',
      color:'black'
  },
  switchContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:globalWidth(30)
  },
  checkStyle:{
    fontSize:globalWidth(13),
    marginLeft:globalWidth(5)
  }
});
