import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/Matching/MatchingHeroScreenStyles';

const RequestMatching = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.matchButton} onPress={onPress}>
      <Text style={styles.matchButtonText}>매칭 요청하기</Text>
    </TouchableOpacity>
  );
};

export default RequestMatching;
