import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

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
       <View style={style.image}>
        <Image source={item.image} />
       </View>
       <View style={style.descriptionBox}></View>
    </View>
  )
}

export default ItemOverview


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow"
    },
    image: {
        flex: 1,
        backgroundColor: "red"
    },
    descriptionBox: {
        flex: 1,
        backgroundColor: "pink"
    }
})