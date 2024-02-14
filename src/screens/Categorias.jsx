import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  Header  from '../components/Header'
import categorgories_data from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'

const Categorias = () => {

  const renderCategoria= ({item})=> (
    <CategoryItem category={item} />
  )
  return (
    <>
        <Header text='Categorias'/>
        <View style={styles.container}>
            
            
            <FlatList 
              data={categorgories_data}
              renderItem={renderCategoria}
              keyExtractor={item=>item}
            />

        </View>
    </>
  )
}

export default Categorias

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
})