// src/components/Home/StatusButton.tsx

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface StatusButtonProps {
  text: string;
}

const StatusButton: React.FC<StatusButtonProps> = ({text}) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#FE4F18',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 5,
    width: 100,
    height: 25,
    justifyContent: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StatusButton;
