// src/components/Alarm/CheckReviewAlarmButton

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/Alarm/AlarmHostScreenStyles';

const CheckReviewAlarmButton = () => (
  <TouchableOpacity style={styles.reviewButton}>
    <Text style={styles.buttonText}>후기 확인하기</Text>
  </TouchableOpacity>
);

export default CheckReviewAlarmButton;
