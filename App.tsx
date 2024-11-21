import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList, Pressable, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import FlexBox from './components/flexbox';
import AntDesign from '@expo/vector-icons/AntDesign';

export interface IToDo {
  id: number,
  name: string
}

export default function App() {
 const [todo, setTodo] = useState('');
 const [listTodo, setListTodo] = useState<IToDo[]>([]);


const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
 }
const handleListTodo = () => {
  if(!todo){
    Alert.alert('Lỗi input Todo', 'Bạn chưa điền vào input Todo',
      [
        {
          text: 'Xác nhận',
          
        },
      ],
    )
    return;
  };
  setListTodo([...listTodo, {id: randomInteger(1, 1000), name: todo}]);
  // setListTodo([]);
  setTodo('');
 
 }

 const handeDeleteTodo = (id: number) => {
  let newtodo = listTodo.filter(item => item.id !== id)
  setListTodo(newtodo);

 }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

    <View style={styles.container}>
      <Text style={styles.header}>TODO APP</Text>

      <View style={styles.btninputtodo}>
        <TextInput
        value={todo}
        onChangeText={(value) => setTodo(value)}
        style={styles.inputTodo}
        />


        <Button
        onPress={handleListTodo}
        title='ADD TODO'/>
      </View>

     {/* list todo */}
      
      <View  style={styles.listTodo}>
         <FlatList
         data={listTodo}
         renderItem={({item}) => {
          return(
            <Pressable
            style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}
            onPress={() => handeDeleteTodo(item.id)}>
              <View style={styles.closeTodo}>
                <Text style={styles.listItemtodo}>- {item.name}</Text>
                <AntDesign name="close" size={24} color="black" />

              </View>
              
            </Pressable>
            
          )
         }}
         />

      </View>

      {/* 
      <ScrollView>
        {students.map(item => {
          return(
            <View key={item.id} style={{padding: 30, backgroundColor: 'pink', marginBottom: 30}}>
              <Text >{item.name}</Text>
            </View>

          )
          
        })}
      
      </ScrollView> */}

    </View>

    </TouchableWithoutFeedback>

    // <FlexBox/>

  

  
  );
}

// không có khái niệm về css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    // padding: 50,
    // paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  closeTodo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'red',
    padding: 20,
    marginTop: 15
  },

  header: {
    fontSize: 30, 
    textAlign: 'center', 
    backgroundColor: 'red', 
    padding: 15
  },

  btninputtodo: {
    paddingHorizontal: 20
  },

  inputTodo: {
    borderBottomColor: 'green', 
    borderBottomWidth: 1, 
    marginVertical: 15, 
    padding: 5
  },

  listTodo: {
    paddingHorizontal: 20,
    marginTop: 15,
    flex: 1
  },

  listItemtodo: {
    marginBottom: 8,

  }
});
