import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }


  return (
    <View style={styles.container}>

      {/* Today Tasks */}
      <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today Tasks</Text>

        <View style={styles.items}>
          {/* Here the tasks */}

{
  taskItems.map((item, index) => {
    return(
      <TouchableOpacity key={index} onPress={() => completeTask(index)}>
      <Task key={index} text={item}/>
      </TouchableOpacity>
    )
    
  })
}
        </View>

      </View>

      {/* Write task */}
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? "padding" : "height"}
      style={styles.writetaskwrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addwrapper}>
            <Text style={styles.addtext}>➕</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  taskWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
  },
  sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
  },
  items: {
      marginTop: 30,
  },

  writetaskwrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,

  },
  addwrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addtext: {},

});
