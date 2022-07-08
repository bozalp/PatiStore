import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:
    {
        flex: 1,
        flexDirection: 'row',
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
    },   
    title:
    {
        fontWeight:'bold',
        color:'#000',
        height:'100%',
    },
    price:
    {
        fontWeight:'bold',
        height:'50%',
    },
    title_body:
    {
        height:50,
        marginRight: 10,
        marginLeft: 10,
    },
    in_stock_false:
    {
        color:'red',
        fontWeight:'bold',
        height:'100%',
    },
    product_image:
    {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'center',
    },
    image_card:
    {
        alignItems: 'center' ,
        padding:10,
    },
    card:
    {
        flex: 2,
        backgroundColor: '#dedede',
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height / 2.3,
        borderRadius:10,
    },

});