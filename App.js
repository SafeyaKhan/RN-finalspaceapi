import { StyleSheet, Text, View, SafeAreaView, Button, ScrollView, RefreshControl ,FlatList, Image} from 'react-native'
import React, { useState , useEffect} from 'react'

const App = () => {
  // const [items, setItems] = useState([
  //   {id: 1, text: 'Learn React-Native'},
  //   {id: 1, text: 'Learn React'},
  //   {id: 1, text: 'Learn JS'},
  //   {id: 1, text: 'Learn Python'},
  //   {id: 1, text: 'Learn Java'},
  //   {id: 1, text: 'Learn Html'},
  //   {id: 1, text: 'Learn CSS'},
  //   {id: 1, text: 'Learn Flutter'},
  //   {id: 1, text: 'Learn SQL'},
  //   {id: 1, text: 'Learn Fabric'},
  //   {id: 1, text: 'Learn Oracle'},
  //   {id: 1, text: 'Learn C#'},
  // ])

  // const [refresh, setRefresh] = useState(false);

  // const onRefresh = () => {
  //   setRefresh(true);
  //   setItems([...items, {id: items.length + 1,text: `Learn Tech No ${items.length}`}])
  //   setRefresh(false);
  // }
  // const languages = [
  //   {name: 'JS', key :'1'},
  //   {name: 'JS2', key :'2'},
  //   {name: 'JS3', key :'3'},
  //   {name: 'JS4', key :'4'},
  //   {name: 'JS5', key :'5'},
  //   {name: 'JS6', key :'6'},
  //   {name: 'JS7', key :'7'},
  //   {name: 'JS8', key :'8'},
  //   {name: 'JS9', key :'9'},
  //   {name: 'JS10', key :'10'},
  //   {name: 'JS11', key :'11'},
  //   {name: 'JS12', key :'12'},
  //   {name: 'JS13', key :'13'}  ]
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://finalspaceapi.com/api/v0/character/')
      const data = await response.json()
      setData(data)
    }
    getData()
  },[])

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
      >
      {items.map(item => (
       <View key={item.id} style={styles.item}>
         <Text style={styles.text}>{item.text}</Text>
       </View>
     ))}
      </ScrollView>    */}
      <Text style={styles.heading}>Final Space API</Text>
      <FlatList data={data} keyExtractor={item => item.id}
      renderItem={({item}) => (
         <View style={styles.item}>
         <Text style={styles.text}>{item.name}</Text>
         <Image
          style={styles.img}
          source={{ uri: `${item.img_url}` }}
        />
       </View>
      )} />
    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'lightpink'
  },
  item:{
    margin:10,borderRadius:15,marginHorizontal:50 ,padding:20, justifyContent:'center',alignItems:'center',backgroundColor:'darkblue'
  },
  text:{
    fontSize: 20,fontWeight:'bold',color:'white',padding:10,textAlign:'center'
  },
  img:{
    width:80, height:80, color: 'white',borderRadius:5,justifyContent:'center',alignItems:'center'
  },
  heading:{
    textAlign:'center',fontWeight:'bold',color:'darkblue',fontSize:30,margin:10
  }
})