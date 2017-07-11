import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// Import Note.js to main component
import Note from "./App/components/Note";

export default class Todo extends Component {
  // Define Initial State
  state = {
    noteArray: [],
    noteText: "",
  }
  render() {
    // Loop our notes with map
    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key)} />
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>TODO APP</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput style={styles.textInput}
            onChangeText={(noteText) => this.setState({ noteText })} value={this.state.noteText}
            placeholder="Type Here" placeholderTextColor="white" textAlign="center">
          </TextInput>
        </View>

      </View>
    );
  }
  // create a function to add notes
  addNote() {
    if (this.state.noteText) {
      this.state.noteArray.push({ "note": this.state.noteText });
      this.setState({ noteArray: this.state.noteArray })     // add note to noteArray state
      this.setState({ noteText: "" })      // reset noteText
    }
  }
  // create a function to deletes notes 
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });     // update state of noteArray
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#E91E63",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",
  },
  headerText: {
    color: "white",
    fontSize: 22,
    padding: 22,
  },
  footer: {
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#E91E63",
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -30,
    zIndex: 10,
  },
  addButtonText: {
    color: "white",
    fontSize: 26,
  },
  textInput: {
    alignSelf: "stretch",
    color: "white",
    padding: 20,
    paddingTop: 30,
    backgroundColor: "#252525",
    borderTopWidth: 5,
    borderTopColor: "#ddd",
  }
});

AppRegistry.registerComponent('Todo', () => Todo);