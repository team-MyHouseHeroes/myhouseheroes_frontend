// src\components\Matching\ChangeStatusModal.tsx

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from '../../styles/Matching/MatchingHostScreenStyles';

const ChangeStatusModal = ({visible, onClose, onSelect, selectedStatus}) => {
  const statuses = ['요청 중', '퇴치 중', '퇴치 완료'];

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              {statuses.map(status => (
                <TouchableOpacity
                  key={status}
                  onPress={() => onSelect(status)}
                  style={styles.modalOption}>
                  <Text
                    style={[
                      styles.modalOptionText,
                      selectedStatus === status && styles.selectedOptionText,
                    ]}>
                    {status}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ChangeStatusModal;
