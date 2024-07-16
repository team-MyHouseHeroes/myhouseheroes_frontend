// src/components/Home/StatusButton

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from '../../styles/Home/HomeScreenStyles';

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

export default StatusButton;
