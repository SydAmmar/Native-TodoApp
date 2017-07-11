import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";

export default class Todo extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.note}>

                <Text>{this.props.val.note}</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.delete}>
                    <Text style={styles.deleteText}>D</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    note: {
        position: "relative",
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: "#ccc",
    },
    delete: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2980b9",
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    deleteText: {
        color: "white",
    }
});