// src/components/Matching/RequestMatching.tsx

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/Matching/MatchingHeroScreenStyles';

const SuccessMatching = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.successMatchButton} onPress={onPress}>
      <Text style={styles.successMatchButtonText}>매칭 성공!</Text>
    </TouchableOpacity>
  );
};

export default SuccessMatching;
