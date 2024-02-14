import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({text}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitulo}>{text}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer :{
        height: 100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0c181c',
    },
    headerTitulo :{
        color:'#fff',
    }
})