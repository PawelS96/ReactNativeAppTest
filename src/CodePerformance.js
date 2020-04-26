import {generateText} from "./Person";
import {NativeModules} from 'react-native';

export function testCodePerformance(rows: Number) {
    let text = generateText(rows);
    let personList = [];

    let startTime = Date.now();
    let lines = text.split("\n");
    lines.forEach(line => {

        let props = line.split(",");
        let name = props[0];
        let surname = props[1];
        personList.push({name: name, surname: surname})
    });

    let textToListTime = Date.now() - startTime;
    startTime = Date.now();

    personList.sort(function (a, b) {
        return a.surname.localeCompare(b.surname)
            || a.name.localeCompare(b.name);
    });

    let sortTime = Date.now() - startTime;

    return [textToListTime, sortTime];
}

const NativeModule = NativeModules.NativeModule;

export function testNativeEmptyMethod() {

    let start = Date.now();
    NativeModule.emptyMethod(() => {
        alert(Date.now() - start + " ms")
    });
}

export function testNativeGetData(size) {

    let start = Date.now();
    NativeModule.getList(size, (list, arrayTime) => {

        let totalTime = Date.now() - start;
        alert(totalTime.toString() + " | " + arrayTime)
    });
}

