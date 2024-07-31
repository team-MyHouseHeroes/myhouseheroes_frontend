// src/components/Matching/RequestMatching.tsx

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/Matching/MatchingHeroScreenStyles';

const RequestMatching = ({onPress, isRequesting}) => {
  return (
    <TouchableOpacity style={styles.requestMatchButton} onPress={onPress}>
      <Text style={styles.requestMatchButtonText}>
        {isRequesting ? '매칭 요청 중' : '매칭 요청하기'}
      </Text>
    </TouchableOpacity>
  );
};

export default RequestMatching;
