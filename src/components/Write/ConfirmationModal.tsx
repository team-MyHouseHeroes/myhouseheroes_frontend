// src/components/Write/ConfirmationModal.tsx

import React, {useState, useEffect} from 'react';
import {View, Text, Modal, StyleSheet, Animated} from 'react-native';
import styles from '../../styles/Write/ConfirmationModalStyles';

interface ConfirmationModalProps {
  visible: boolean;
  onClose: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  onClose,
}) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        onClose();
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
      onDismiss={onClose}>
      <Animated.View style={[styles.overlay, {opacity: fadeAnim}]}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>요청 글이 등록되었습니다</Text>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default ConfirmationModal;
