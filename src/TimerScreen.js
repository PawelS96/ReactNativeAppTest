import React, {Component} from "react";
import {View, StyleSheet, Text} from "react-native";
import {RoundButton} from "./Button";
import {TimerText} from "./TimerText";
import Slider from '@react-native-community/slider';
import {Colors} from "./Colors";

export function msToTime(s) {

    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
    }

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
}

export default function getTimerScreen() {
    return <TimerScreen/>;
}

class TimerScreen extends Component {

    constructor(props) {
        super(props);
        this.refDict = [];
        this.count = 0;

        this.state = {

            delay: 20,
            isRunning: false
        };
    }

    start() {

        this.count = 0;

        this.timeout = setInterval(() => {
            this.setNumber(this.count++)
        }, this.state.delay)
    }

    componentWillUnmount(): void {
        stop();
    }

    stop() {
        if (this.timeout)
        clearTimeout(this.timeout)
    }

    setNumber(num: Number) {

        let numStr = num.toString();

        this.refDict.forEach((ref) => {
            ref.display(numStr);
        });
    }

    onButtonPress = () => {

        if (this.state.isRunning)
            this.stop();
        else
            this.start();

        this.setState({isRunning: !this.state.isRunning});
    };

    render() {

        let timers = [];
        for (let i = 0; i < 5; i++) {
            timers.push(
                (<TimerText key={i} ref={r => {
                    this.refDict[i] = r;
                }}/>)
            );
        }

        let buttonTxt = this.state.isRunning ? "STOP" : "START";

        return <View tabLabel="TESTY" style={{display: 'flex', flex: 1, justifyContent: 'center'}}>

            <View style={styles.timersContainer}>
                {timers}
            </View>

            <View style={styles.bottom}>
                <RoundButton action={this.onButtonPress} text={buttonTxt} />
                <Slider minimumValue={10} maximumValue={100} step={10}
                        thumbTintColor={Colors.colorAccent}
                        onValueChange={(value) => {
                            this.setState({delay: value})
                        }}
                />
                <Text style={styles.sliderLabel}>{this.state.delay.toString() + " ms"}</Text>
            </View>

        </View>;
    }
}

const styles = StyleSheet.create({

    timersContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 120
    },
    bottom: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 15,
        width: '100%'
    },

    sliderLabel: {
        textAlign: 'center',
        fontSize: 14,
        color: 'white'
    }
});
