// src/components/Matching/ExterminateSuccess.tsx

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/Matching/MatchingHeroScreenStyles';

const ExterminateSuccess = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.exterminateMatchButton} onPress={onPress}>
      <Text style={styles.exterminateMatchButtonText}>퇴치 완료</Text>
    </TouchableOpacity>
  );
};

export default ExterminateSuccess;
