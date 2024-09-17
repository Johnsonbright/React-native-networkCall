import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {
const [isLoading, setIsLoading] = useState(false)
const [data, setData] = useState(null)

useEffect(() => {
  FetchData()
}, [])

const FetchData = async() => {
  setIsLoading(true)
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

  const data = await response.json();
 setData(data)
   setIsLoading(false)
 
}

  return (
    <View>

      {
        isLoading? <ActivityIndicator size={100}/> : null
      }
      <Button title="Make API call" onPress={FetchData} />
      {data ? (
        <View>
          <Text>Title- {data.title}</Text>
          <Text>Body- {data.body}</Text>
        </View>
      ): null}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})