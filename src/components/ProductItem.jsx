import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ProductItem = ({item}) => {
    
  return (
        <View style={styles.containerProduct}>
            <Text>{item.title}</Text>
            <Image
                style= {styles.imageItem}
                resizeMode= 'cover'
                source= { {uri: item.thumbnail} }
            />
        </View>
    
  )
}

export default ProductItem

const styles = StyleSheet.create({
    imageItem : {
        width:100,

    },
    containerProduct : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10

    }
})