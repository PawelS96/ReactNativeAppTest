import React, {Component} from "react";
import {Text, StyleSheet, Alert} from "react-native";
import {Colors} from "./Colors";

export class TimerText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "0"
        };
    }

    display(txt: String){
        this.setState({text: txt});
    }

    render() {

        return (
            <Text style={styles.timerText}>{this.state.text}</Text>
        )
    }
}

const styles = StyleSheet.create({
    timerText: {
        textAlign: 'center',
        fontSize: 44,
        color: Colors.colorFont
    }
});
