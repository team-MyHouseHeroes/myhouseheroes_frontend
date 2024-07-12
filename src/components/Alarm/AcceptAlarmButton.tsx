// src/components/Alarm/AcceptAlarmButton

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/Alarm/AlarmHostScreenStyles';

const AcceptAlarmButton = ({onPress}) => (
  <TouchableOpacity style={styles.acceptButton} onPress={onPress}>
    <Text style={styles.buttonText}>수락</Text>
  </TouchableOpacity>
);

export default AcceptAlarmButton;
