import React, {Component} from 'react';
import {
    Text, View, StyleSheet
} from 'react-native';

import {Colors} from "./Colors";
import {StatusBar, Dimensions} from "react-native";
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import TestsScreen from "./TestsScreen";
import getTimerScreen from "./TimerScreen";
import getListScreen from "./ListScreen";

const initialLayout = {width: Dimensions.get('window').width};

export default class MainScreen extends Component{

    state = {

        index: 1,
        routes: [
            {key: 'first', title: 'LISTA'},
            {key: 'second', title: 'STOPER'},
            {key: 'third', title: 'TESTY'},
        ]
    };

     renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={styles.indicatorStyle}
            style={{backgroundColor: Colors.colorPrimary}}
        />
    );

     renderScene = SceneMap({
        first: getListScreen,
        second: getTimerScreen,
        third: TestsScreen
    });

     render(): React.ReactNode {

         return <View style={styles.container}>

             <StatusBar backgroundColor={Colors.colorPrimary}/>

             <View style={styles.appbar}>
                 <Text style={styles.title}>React Native App</Text>
             </View>

             <TabView
                 renderTabBar={this.renderTabBar}
                 navigationState={this.state}
                 renderScene={this.renderScene}
                 onIndexChange={(ind) => this.setState({index: ind})}
                 initialLayout={initialLayout}
             />
         </View>


     }


}


const styles = StyleSheet.create({


    indicatorStyle:{
        backgroundColor:Colors.colorAccent
    },

    container: {
        flex: 1,
        backgroundColor: Colors.colorPrimary,
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginStart: 15,
    },
    appbar: {
        height: 50,
        backgroundColor: Colors.colorAccent,
        justifyContent: 'center',
    },
    scene: {
        flex: 1,
    },
});
