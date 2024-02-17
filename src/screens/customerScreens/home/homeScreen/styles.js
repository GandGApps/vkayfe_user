import {StyleSheet, Dimensions} from "react-native";
import {Colors} from "../../../../constants";
import {globalHeight, globalWidth} from "../../../../components";


let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({

    headerContainer: {
        backgroundColor: Colors.backgroundBLightBlue,
        paddingHorizontal: globalWidth(20),
        paddingVertical:globalHeight(10)
    },
    headerTextContainer: {
        alignItems: "center",
        paddingHorizontal: globalHeight(10),
        justifyContent: "space-between",
        paddingVertical: globalHeight(10),
    },
    mask: {
        width: width - globalWidth(40),
        height: globalHeight(159),
        // resizeMode:'contain',
        borderRadius: 10
    },
    headerContent1:{
        flexDirection:'row',
        alignItems:'center',
        // paddingTop: globalHeight(27),
        paddingBottom: globalHeight(17),
        justifyContent: "space-between",
        // borderBottomWidth: 1,
        // borderTopWidth: 1,
        borderColor: Colors.borderGray,
        // marginVertical: globalHeight(17),
        marginHorizontal: globalWidth(20)
    },
    headerContent: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: globalHeight(15),
        paddingBottom: globalHeight(15),
        justifyContent: "space-between",
        marginBottom: globalHeight(20),
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: Colors.borderGray,
        marginVertical: globalHeight(14),
        marginHorizontal: globalWidth(20)

    },
    bottomIconStyle: {
        resizeMode: "contain",
        width: globalWidth(7),
        height: globalHeight(12),
    },
    filterTextStyle: {
        color: Colors.black
    },
    winIconStyle: {
        width: globalWidth(12),
        height: globalWidth(16),
        resizeMode: 'contain',
        tintColor:'#0BC5BA'
    },
    HeaderFooter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'center',
        marginTop: globalHeight(10),
    },
    formContainer: {
        flex: 1,
        alignItems: "center",
    },
    formContent: {
        flex: 1,
        alignItems: "flex-start",
        width: width - globalWidth(30),
    },
    filterCont: {
        marginBottom: globalHeight(10)
    },
    noneBtmWdth: {
        borderTopWidth: 0
    },
    input: {
        borderBottomWidth: 0,
        height:globalHeight(49),
        width: '80%',
    },
    headerInput: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: '#E2EFFF',
        borderRadius: 8,
        backgroundColor: Colors.white,
    },
    searchIcon: {
        width: globalWidth(22),
        height: globalWidth(22),
        resizeMode: 'contain',
    },
    searchCont: {
        backgroundColor: Colors.tifany,
        paddingVertical: globalHeight(12),
        paddingHorizontal: globalWidth(12),
        borderRadius: 6,
        position: 'absolute',
        right: 0
    },
    recText:{
        backgroundColor:Colors.blueBackground,
        paddingRight:globalWidth(20),
        paddingBottom:globalHeight(10)
    },
    recText1:{
        paddingHorizontal:globalWidth(20),
    },
    autoDataStyle:{
        marginHorizontal:globalWidth(20),
        paddingVertical:globalHeight(15),
        borderBottomWidth:1,
        borderBottomColor:Colors.borderGray
    },
    autoText:{
        fontSize:globalWidth(12),
        color:'#64768A'
    },
    backCont:{
      position:'absolute',
      zIndex:10,
        alignItems:'center',
        justifyContent:'center'
    },
    filterContainer: {
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderColor: Colors.tifany,
        paddingVertical: globalHeight(8),
        paddingHorizontal: globalHeight(5),
    },
    filterIconStyle: {
        resizeMode: "contain",
        width: globalWidth(15),
        height: globalHeight(11),
    },
    backIcon:{
      resizeMode:'contain',
      width:globalWidth(17),
      height:globalHeight(20)
    },

    headerFooterText: {
        marginLeft: globalWidth(4),
    },
    headerSearch:{
        paddingVertical:globalWidth(10),
        backgroundColor:Colors.blueBackground,
        marginBottom:globalHeight(10)
    },
    iconTopBottom:{
        resizeMode: "contain",
        width: globalWidth(16),
        height: globalWidth(16),
    },
    contView:{
        paddingHorizontal:globalWidth(20),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    cityT:{
        fontSize:globalWidth(12)
    }
});
