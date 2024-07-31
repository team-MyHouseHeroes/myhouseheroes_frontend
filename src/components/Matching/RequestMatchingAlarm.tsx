// src/components/Matching/RequestMatchingAlarm.tsx

import React, {useEffect} from 'react';
import {View, Text, Modal} from 'react-native';
import styles from '../../styles/Matching/MatchingHeroScreenStyles';

const RequestMatchingAlarm = ({visible, onDismiss}) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onDismiss();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [visible, onDismiss]);

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onDismiss}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>
            호스트님에게 매칭이 요청되었습니다
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default RequestMatchingAlarm;
