// src/components/Alarm/RejectAlarmButton

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/Alarm/AlarmHostScreenStyles';

const RejectAlarmButton = () => (
  <TouchableOpacity style={styles.rejectButton}>
    <Text style={styles.buttonText}>거절</Text>
  </TouchableOpacity>
);

export default RejectAlarmButton;
