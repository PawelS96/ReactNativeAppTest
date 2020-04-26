import React from "react";
import {View} from 'react-native';
import {testNativeEmptyMethod, testNativeGetData, testCodePerformance} from "./CodePerformance";
import {alert} from "react-native/Libraries/Alert/Alert";
import createButton from "./Button";
import {mounted, msToTime, onrender} from "./TimerScreen";
import {mountTime, renderTime, startTime} from "../App";

export default function testsScreen() {

    return <View tabLabel = "TESTY">

        {createButton("PRZETWARZANIE TEKSTU I SORTOWANIE", () =>{testSorting()})}
        {createButton("PUSTA METODA NATYWNA", () =>{testNativeEmptyMethod()})}
        {createButton("POBRANIE LISTY (100)", () =>{testNativeGetData(100)})}
        {createButton("POBRANIE LISTY (1000)", () =>{testNativeGetData(1000)})}
        {createButton("POBRANIE LISTY (10000)", () =>{testNativeGetData(10000)})}
        {createButton("CZAS WYŚWIETLENIA", () =>{displayStartupTime()})}

    </View>;
}

function displayStartupTime(){

    alert(
        msToTime(startTime) + "\n" +
        msToTime(renderTime) + ", " +
        msToTime(mountTime)
    )
}

function testSorting(){

    const times = testCodePerformance(10000);
    alert(times[0].toString() + " ms, " + times[1].toString() + " ms");
}

