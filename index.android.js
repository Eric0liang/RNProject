import React from 'react';
import {
    AppRegistry,
} from 'react-native';
import MainView from "./js/main.js";

export default class HelloWorld extends React.Component {
    render() {
        return (
            <MainView/>
        )
    }
}
AppRegistry.registerComponent('rnproject', () => HelloWorld);