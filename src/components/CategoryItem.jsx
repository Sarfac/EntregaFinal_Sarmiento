
import React from 'react'
import Card from './Card'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CategoryItem = ({category }) => {
  return (
    <TouchableOpacity >
        <Card style={styles.cardContainer}>
            <Text style={styles.text}>{category}</Text>
        </Card>
    </TouchableOpacity>
    
  )
}

export default CategoryItem

const styles = StyleSheet.create ({
    cardContainer : {
        padding: 10,
        margin: 10,
        backgroundColor: '#ffff',
    },
    text : {
        textTransform: 'capitalize'
    }
})