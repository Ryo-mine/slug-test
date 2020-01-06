import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BodyText extends Recat.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.props.chirdren}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#DDD',
    backgroundColor: '#eee',
  },
});

export default BodyText;
