import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

function ItemOverview({route}) {
    const {item} = route.params || {};

    if(!item){
        return(
            <View style={style.container}>
                <Text>Item Not found</Text>
            </View>
        )
    }
  return (
    <View style={style.container}>
       <View style={style.imageBox}>
        <Image source={item.image} style={{width: '100%', height: "100%"}} resizeMode='contain'/>
       </View>
       <View style={style.descriptionBox}>
        <View style={style.rate}>
            <AntDesign name="star" size={24} color="#ef7b1c" />
            <Text style={style.rateText}>{item.rate}</Text>
        </View>
        <View style={style.name}>
            <Text style={style.nameText}>{item.name}</Text>
            <Text style={style.nameText}>GH₵{item.price}</Text>
        </View>
        <View style={style.divider}></View>
        <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#695545', paddingBottom: 10, marginTop: 10}}>Description:</Text>
            <Text style={style.descriptionText}>{item.description}</Text>
        </View>
        <TouchableOpacity style={style.addToCart}>
            <Text>Add to cart</Text>
        </TouchableOpacity>
       </View>
    </View>
  )
}

export default ItemOverview;


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow"
    },
    imageBox: {
        flex: 1,
        backgroundColor: "#faf4f0"
    },
    descriptionBox: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 20
    },
    divider: {
        width: '100%',
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 1,
        marginHorizontal : 'auto',
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    rateText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingBottom: 15
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    descriptionText: {
        fontSize: 18,
        color: '#695545',
        lineHeight: 17 * 1.5
    },
    addToCart: {
        alignItems: 'center',
        marginTop: 45,
        padding: 20,
        backgroundColor: '#ff5f00',
        borderRadius: 30,
    }
})