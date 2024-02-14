import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import products_data from '../data/products_data.json'
import ProductItem from '../components/ProductItem'
 
const ProductosPorCategoria = () => {

  const renderItemCategory =({item})=> (
    <ProductItem item={item}/>
  )

  

    return (
    <FlatList
      data={products_data}
      renderItem={renderItemCategory}
      keyExtractor={item=> item.id}
    />
  )
}

export default ProductosPorCategoria

const styles = StyleSheet.create({
  
})