import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HelloView from "./hello.js";
import PropsView from "./props.js";
import StateView from "./state.js";
import StyleView from "./style.js";
import Flexbox from "./flexbox.js";
import TextInput from "./textinput.js";
import ScrollView from "./scrollView.js";
import FlatListView from "./flatList.js";
import SectionListView from "./sectionList.js";
import Fetch from "./fetch.js";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'React Native App',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <FlatList data={[
                    {key: 'Hello'},
                    {key: 'Props'},
                    {key: 'State'},
                    {key: 'Style'},
                    {key: 'Flexbox'},
                    {key: 'Textinput'},
                    {key: 'ScrollView'},
                    {key: 'FlatList'},
                    {key: 'SectionList'},
                    {key: 'Fetch'},
                ]}
                          renderItem={({item}) =>
                              <View>
                                  <Text style={styles.item}
                                        onPress={() => navigate(item.key, {title: item.key})}>{item.key}</Text>
                                  <View style={styles.line}/>
                              </View>
                          }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    item: {
        padding: 15,
        fontSize: 18,
        color: '#333',
        backgroundColor: 'white'
    },
    line: {
        flex: 1,
        height: 0.5,
        backgroundColor: '#d7d7d7'
    },
})

class HelloScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.title}`,
    });

    render() {
        return (
            <HelloView/>
        );
    }
}
class PropsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.title}`,
    });

    render() {
        return (
            <PropsView/>
        );
    }
}
class StateScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.title}`,
    });

    render() {
        return (
            <StateView/>
        );
    }
}
class StyleScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.title}`,
    });

    render() {
        return (
            <StyleView/>
        );
    }
}
class FlexboxScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.title}`,
    });

    render() {
        return (
            <Flexbox/>
        );
    }
}
class TextInputScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.title}`,
    });

    render() {
        return (
            <TextInput/>
        );
    }
}
class ScrollViewScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.title}`,
    });

    render() {
        return (
            <ScrollView/>
        );
    }
}
class FlatListScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.title}`,
    });

    render() {
        return (
            <FlatListView/>
        );
    }
}
class SectionListScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.title}`,
    });

    render() {
        return (
            <SectionListView/>
        );
    }
}
class FetchScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.title}`,
    });

    render() {
        return (
            <Fetch/>
        );
    }
}


export default SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Hello: {screen: HelloScreen},
    Props: {screen: PropsScreen},
    State: {screen: StateScreen},
    Style: {screen: StyleScreen},
    Flexbox: {screen: FlexboxScreen},
    Textinput: {screen: TextInputScreen},
    ScrollView: {screen: ScrollViewScreen},
    FlatList: {screen: FlatListScreen},
    SectionList: {screen: SectionListScreen},
    Fetch: {screen: FetchScreen},
});
