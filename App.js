import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {
 const [product, setProducts] = useState([]);
console.log('Products ', product)

 useEffect(() => {
  getAPIProduct()
 }, [])

  const getAPIProduct = async() => {
    
    const response = await fetch ("https://fakestoreapi.com/products")
    const data = await response.json()
    console.log(data.image)
    setProducts(data)
 
  }

  return (
    <SafeAreaView>
    <FlatList data={product} renderItem={ProductCard} keyExtractor={item => item.id}/>
    </SafeAreaView>
  )
}

const ProductCard = ({item}) => {
  return(
    <View style={styles.productCard}>
    
      <Text style={styles.title}>{item.title}</Text>
      <Image source={{uri: item.image}} styles={styles.image}/>
    
      <Text style={styles.price}> Price: ₦{item.price}</Text>
      <Text style={styles.price}> Category: {item.category}</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  productCard:{
    backgroundColor:'#EBDBAD',
    borderWidth: 1,
    borderColor: 'gray',
    elevation: 20,
    padding:10,
    margin: 15,
    borderRadius: 10
  },
  image: {
    height: 200,
    resizeMode:'cover'
  },
  title: {
    color: 'black',
    fontSize: 20
  },
  price: {
    color: 'black',
    fontSize: 18
  }
})