import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {
const [isLoading, setIsLoading] = useState(false);
const [product, setProduct] = useState([])


useEffect(() => {
  getAPIProduct()
}, [])

const getAPIProduct = async() => {
  setIsLoading(true)
  const response = await fetch ("https://fakestoreapi.com/products")
  const data = await response.json()
  setProduct(data)
  setIsLoading(false)
}

  return (
    <ScrollView>
    { isLoading ? <ActivityIndicator size={50}/> : null }

      { product.map(item => {
      return(
      <View key={item.id}>
           <Image source={{uri: item.image}} style={{height: 300, resizeMode:'cover', padding:20, margin: 20,borderWidth:5, borderColor: 'black' }}/>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
)})}
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 20,
  }
})