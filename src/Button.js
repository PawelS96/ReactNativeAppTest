import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors} from "./Colors";
import React from "react";
import {Component} from "react";

export class RoundButton extends Component {


    render() {

        return <TouchableOpacity
            onPress={this.props.action}
            style={buttonStyle.button}>
            <Text style={buttonStyle.text}>{this.props.text}</Text>
        </TouchableOpacity>



    }


}
export default function createButton(text, action) {

    return <TouchableOpacity
        onPress={action}
        style={buttonStyle.button}>
        <Text style={buttonStyle.text}>{text}</Text>
    </TouchableOpacity>
}

const buttonStyle = StyleSheet.create({

    text: {
        color: Colors.colorFont,
        fontSize: 16
    },

    button: {

        marginVertical: 10,
        alignSelf: 'center',
        width: '95%',
        height: 50,
        borderRadius:10,
        backgroundColor: Colors.colorAccent,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    }
});
