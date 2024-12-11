import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
const postData = {
  title: "This is my first time",
  user: "Zero deegree coder"
}

  const handleCreatePost = async () => {
    try{
      setIsLoading(true)
      // const api_url = " http://192.168.202.96:3000/Post"
      const api_url = "http://localhost:3000/Post"

      const response = await fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
           body: JSON.stringify(postData),
      })
      const data = await response.json();
      console.log("DATA", data)
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }

  }
  return (
    <View>
      <Text>Learn Post Request in React Native</Text>
     <Button  title="Create Post" onPress={handleCreatePost}/>
    {isLoading ?  <ActivityIndicator size="medium"/> : null }
    </View>
  )
}

export default App

const styles = StyleSheet.create({})