import {StyleSheet, Dimensions, Platform} from "react-native";
import {Colors} from "../../../../constants";
import {globalHeight, globalWidth} from "../../../../components";


let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    content: {
        paddingHorizontal: globalWidth(22),
        paddingTop: globalHeight(20)
    },
    cont: {
        justifyContent: 'space-between',
        flex: 1
    },
    likebtn: {
        zIndex: 900000000,
        position:'absolute',
        right:20,
        bottom:globalHeight(-5),
        width: globalWidth(45),
        height: globalHeight(52),
        alignItems:'center',
        justifyContent:'center',
    },
    styleLik:{
            width: globalWidth(45),
            height: globalHeight(52),
        borderRadius:100,
            resizeMode: "contain",
        alignItems:'center',
        justifyContent:'center',
    },
    likeIc: {
        width: globalWidth(35),
        height: globalHeight(35),
        resizeMode: "contain",
    },
    imgHeader: {
        width: width,
        height: height / 2.3
    },
    textCont: {
        fontSize: globalWidth(25),
        lineHeight: 30
    },
    rowCont: {
        justifyContent: 'space-between',
        paddingTop: globalHeight(12)
    },
    bckContCircle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50
    },
    timeContainer: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: Colors.borderColorLight,
        paddingVertical: globalHeight(13),
        marginVertical: globalHeight(33)
    },
    grayText: {
        color: Colors.gray
    },
    ops: {
        marginBottom: globalHeight(7)
    },
    idText: {
        marginVertical: globalHeight(25)
    },
    btnCont: {
        backgroundColor: 'transparent',
        borderColor: Colors.black,
        borderWidth: 1,
        marginVertical: globalHeight(20)
    },
    btnText: {
        color: Colors.black
    },
    btnView: {
        backgroundColor: Colors.tifany,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: globalWidth(20),
        borderRadius: 8,
        marginVertical: globalWidth(20),
        height: globalHeight(60)
    },
    linearGradient: {
        position: 'relative'
    },
    bckCont: {
        position: 'absolute',
        top:Platform.OS === 'ios' ? globalHeight(60) :  globalHeight(30),
        left: globalWidth(30),
        zIndex: 50
    },
    bckImg: {
        width: globalWidth(20),
        height: globalHeight(26),
        resizeMode: 'contain',
    },
    stylesContainer: {
        borderRadius: 0,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        height: globalHeight(50),
        backgroundColor: Colors.tifany
    },
    shopIcon: {
        width: globalWidth(15),
        height: globalHeight(15),
        marginRight: globalWidth(5),
        resizeMode: 'contain'
    },
    priceFooter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    priceText: {
        color: Colors.white
    },
    footerCont: {
        borderTopWidth: 1,
        borderTopColor: Colors.borderGray
    },
    text: {
        color: Colors.white
    },
    imgShop: {
        width: globalWidth(65),
        height: globalHeight(65),
        marginRight: globalWidth(5),
        resizeMode: 'contain',
        marginLeft: globalWidth(20),
        borderRadius: 8,
    },
    shopCont: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: globalHeight(10),
    },
    shopContAll: {
        borderTopWidth: 1,
        borderTopColor: Colors.borderGray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20
    },
    rightIcon: {
        width: globalWidth(20),
        height: globalHeight(26),
        resizeMode: 'contain',
    },
    btnAdd: {
        width: globalWidth(28),
        height: globalWidth(28),
    },
    imgPlusMinus: {
        width: globalWidth(28),
        height: globalWidth(28),
        resizeMode: 'contain'
    },
    addCont: {
        textAlign: "center",
        marginBottom: globalHeight(30),
    },
    absl: {
        // right:globalWidth(20),
        // zIndex:1000
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    foot: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%'
    },
    textCount: {
        marginHorizontal: globalWidth(5)
    }
});
