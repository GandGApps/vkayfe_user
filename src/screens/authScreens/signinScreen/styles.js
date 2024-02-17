import { Colors } from "../../../constants";
import {StyleSheet, Dimensions, Platform} from "react-native";
import { globalHeight, globalWidth } from "../../../components";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  headerContainer: {
    position: "relative",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: globalHeight(30),
  },
  pinkMonster: {
    width: width,
    height: height / 2,
    position: "relative",
  },
  touchCont: {
    alignItems: "center",
    justifyContent: "center",
  },
  lineImg: {
    marginTop: -1,
    height: height/2,
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
  switchContainerText: {
    flexDirection: "row",
    width: Platform.OS === 'ios' ? width - globalWidth(55) :  width - globalWidth(65),
    flexWrap: "wrap",
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
    textDecorationLine: "underline",
    fontSize: globalWidth(13.5),
    lineHeight: globalHeight(19),
  },
  footerContainer: {
    marginVertical: globalHeight(20),
  },
  inputContainer: {
    marginVertical: globalHeight(20),
  },
  input: {
    marginVertical: globalWidth(10),
  },
  error:{
    marginLeft:globalWidth(20),
    fontSize:12,
    marginBottom:globalWidth(5),
    color:Colors.red
  },
  focusCell: {
    borderColor: '#000',
  },
  checkStyle: {
    fontSize:globalWidth(13.5),
    lineHeight: globalHeight(19),
    alignItems:'center',
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
});
