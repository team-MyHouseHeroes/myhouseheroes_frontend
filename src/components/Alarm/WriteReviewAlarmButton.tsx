// src/components/Alarm/WriteReviewAlarmButton

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/Alarm/AlarmHostScreenStyles';

const WriteReviewAlarmButton = () => (
  <TouchableOpacity style={styles.reviewButton}>
    <Text style={styles.buttonText}>후기 작성하기</Text>
  </TouchableOpacity>
);

export default WriteReviewAlarmButton;
