// src/screens/Write/writescreen.tsx

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Write Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default WriteScreen;
