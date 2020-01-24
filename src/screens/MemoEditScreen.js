import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.containor}>
        <TextInput Style={styles.memoEditInput} multiline vakue="hi" />
        <CircleButton>
          {'\uf00c'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containor: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    passingBottom: 16,
    fontSize: 16,
  },
});

export default MemoEditScreen;
