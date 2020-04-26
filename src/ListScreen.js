import React, {Component} from "react";
import {View, Image, FlatList, StyleSheet, Text} from "react-native";
import {getPersonList} from "./Person";
import {Colors} from "./Colors";

export default function getListScreen() {
    return <ListScreen/>
}

export const IC_PERSON = require("./ic_person.png");
export const IC_DOTS = require("./ic_dots.png");

function getListItems(){

    let personList = getPersonList();
    personList.forEach((person, index) => {person["id"] = index.toString()});
    return personList;
}


export class ListScreen extends Component {

    dataList = getListItems();

    itemRender = (item) => (

        <View style={{marginVertical: 9}}>

            <View style={style.row}>
                <Image source={IC_PERSON} style={{marginHorizontal: 5}}/>

                <View style={style.column}>
                    <Text style={style.lastnameText}>{item.item.surname}</Text>
                    <Text style={style.nameText}>{item.item.name}</Text>
                </View>
                <Image source={IC_DOTS} style={style.right}/>

            </View>
        </View>);

    render() {

        return <View>

            <FlatList
                data={this.dataList}
                keyExtractor={item => item.id}
                renderItem={this.itemRender}
            >
            </FlatList>

        </View>
    }
}

const style = StyleSheet.create({

        row: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            marginRight: 'auto'
        },

        right: {
            justifyContent: 'flex-end',
            marginRight: 10
        },

        nameText: {
            color: Colors.colorFontAlt,
            fontSize: 14
        },
        lastnameText: {
            color: Colors.colorFont,
            fontSize: 18,
            fontWeight: 'bold'
        }
    }
);

