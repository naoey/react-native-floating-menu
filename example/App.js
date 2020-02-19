/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import FloatingMenu from 'react-native-floating-menu';

const items = [];

for (let i = 0; i < 50; i++)
  items.push({ name: `Item ${i + 1}`, value: i });

export default class App extends Component {
  state = { selectedItem: items[0] }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} />

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
  button: {
    position: 'absolute',
    bottom: 0,
    height: 400,
    width: '100%',
    backgroundColor: 'red',
  }
});
