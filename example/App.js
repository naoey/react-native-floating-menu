/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import FloatingMenu from 'react-native-floating-menu';

const items = [{
  name: 'Item 1',
  value: 0
}, {
  name: 'Item 2',
  value: 2
}, {
  name: 'Item 3',
  value: 3,
}];

const examples = [{
  name: 'Basic',
  route: 'Basic',
}];

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
      }}
      onPress={() => this.props.navigation.navigate(item.route)}>
      <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{item.name}</Text>
    </TouchableOpacity>
  )

  render() {
    return (
      <FlatList
        renderItem={this.renderItem}
        style={{ flex: 1 }}
        data={examples}
        keyExtractor={item => item.route}
      />
    );
  }
}

class ExampleBasic extends Component {
  static navigationOptions = {
    title: 'Basic Example',
  }

  state = { selectedItem: items[0] }

  render() {
    return (
      <View style={styles.container}>
        <FloatingMenu
          showSelectedIndicator
          closeOnSelect={false}
          items={items}
          selectedItem={this.state.selectedItem}
          onSelectItem={item => this.setState({ selectedItem: item })}
        />
      </View>
    );
  }
}

const Navigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Basic: {
    screen: ExampleBasic
  },
});

export default class App extends Component {
  render() {
    return <Navigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
