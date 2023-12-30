import { StyleSheet, Dimensions } from "react-native";
import { globalHeight, globalWidth } from "../../../../components";
import { Colors } from "../../../../constants";


let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({

  contentMyDetailsAll: {
    flex:1,
    justifyContent:'space-between'
  },
  stylesBack: {
    marginTop: globalWidth(14),
    marginBottom: globalHeight(39),
  },
  contentMyDetails: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColorLight,
    marginBottom: globalHeight(34),
    marginHorizontal: globalWidth(20),
  },
  contentMyDetailsText: {
    color: Colors.gray,
    marginBottom: globalHeight(8),
  },

  appBtnContainer: {
    borderWidth: 1,
    backgroundColor: "transparent",
    marginBottom:globalHeight(7)
  },
  appBtnText: {
    color: Colors.black,
  },
  appBtnView: {
    borderTopWidth: 1,
    paddingVertical: globalHeight(25),
    borderColor: Colors.borderGray,
  },
  input:{
    paddingVertical:0,
    marginBottom: globalHeight(34),
    paddingBottom: globalHeight(8),
  },
  error:{
    marginLeft:20,
    fontSize:12,
    marginVertical:5,
    color:Colors.red
  },
  textUnderline: {
    fontSize: globalWidth(12),
    textDecorationLine: "underline",
  },
  accountStateChange: {
    paddingBottom: globalHeight(12),
  },
});
