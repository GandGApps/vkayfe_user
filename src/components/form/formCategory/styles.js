import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../constants";
import { globalHeight, globalWidth } from "../../index";


let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  containerForm: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: globalHeight(13),
    marginVertical: globalHeight(7),
    paddingHorizontal: globalWidth(19),
  },
  img: {
    width: globalWidth(68),
    height: globalWidth(68),
    marginRight: globalWidth(13),
    borderRadius:100,
    resizeMode:'contain'
  },
  title: {
    fontWeight: "600",
    color: Colors.titleColor,
    fontSize: globalWidth(16),
    lineHeight: globalHeight(19),
  },
  pcs: {
    fontWeight: "300",
    color: Colors.titleColor,
    fontSize: globalWidth(14),
  },

  rightIcn: {
    resizeMode: "contain",
    width: globalWidth(9),
    height: globalHeight(17),
  },
});
