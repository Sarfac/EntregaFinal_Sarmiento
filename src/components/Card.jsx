import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children , style}) => {
  return (
    <View style = {{...styles.container, ...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container : {
        shadowColor: '#9999A1',
        shadowOffset : {
            width : 15,
            height: 15
        },
        elevation: 5,
        shadowOpacity:1,
        shadowRadius:1
    }
})