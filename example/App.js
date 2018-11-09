/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
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

export default class App extends Component {
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
