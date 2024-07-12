// src/components/Alarm/SendAddressModal

import React, {useEffect} from 'react';
import {View, Modal, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/Alarm/AlarmHostScreenStyles';

interface Props {
  visible: boolean;
  onRequestClose: () => void;
}

const SendAddressModal: React.FC<Props> = ({visible, onRequestClose}) => {
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (visible) {
      timeout = setTimeout(() => {
        onRequestClose();
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [visible, onRequestClose]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.modalContainer}>
        <View style={styles.alarmContent}>
          <Text style={styles.modalText}>
            히어로에게 호스트의 주소가 전송되었습니다.
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default SendAddressModal;
