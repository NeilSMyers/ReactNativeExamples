import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  crement = amt => {
    this.setState({
      count: this.state.count + amt
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.count}</Text>
        <View style={styles.buttonContainer}>
          <Button color={styles.button.color} style={styles.button} title="Add" onPress={() => this.crement(1)}/>
          <Button color={styles.button.color} style={styles.button} title="Sub" onPress={() => this.crement(-1)}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonContainer: {
    alignItems: "stretch"
  },
  text: {
    fontSize: 100
  },
  button: {
    flex: 1,
    color: "purple",
    backgroundColor: "#00cd78"
  }
});
