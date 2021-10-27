import React, { useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
        { text: 'go to the lab', key: '1'},
        { text: 'create online content', key: '2'},
        { test: 'play soccer', key: '3'}
       
  ]);

  return (
  <View style={styles.container}>
    
<text> Hello World!
</text>
     <View style={styles.content}>
        
          <View style = {styles.list}>

        <FlatList
            data ={todos}
            renderItem={({ item }) => (
              <text>{item.text}</text>
            )}
            />
          </View>

      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff'
  
  },

   content: {
     padding: 40,
  
 },
   list: {
     marginTop: 20,
  }

});
