// src/components/Alarm/OpenAddressModal

import React, {useState, useEffect} from 'react';
import {View, Modal, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/Alarm/AlarmHostScreenStyles';
import SendAddressModal from './SendAddressModal';

interface Props {
  visible: boolean;
  onRequestClose: () => void;
}

const OpenAddressModal: React.FC<Props> = ({visible, onRequestClose}) => {
  const [addressSent, setAddressSent] = useState(false);
  const [showSendAddressModal, setShowSendAddressModal] = useState(false);

  const handleAddressSend = () => {
    setAddressSent(true);
  };

  useEffect(() => {
    if (addressSent) {
      setTimeout(() => {
        setShowSendAddressModal(true);
      }, 500);
    }
  }, [addressSent]);

  const handleCloseSendAddressModal = () => {
    setShowSendAddressModal(false);
    setAddressSent(false);
    onRequestClose();
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible && !addressSent}
        onRequestClose={onRequestClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              히어로에게 주소를 공개하시겠습니까?
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleAddressSend}>
              <Text style={styles.modalButtonText}>주소 공개하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {showSendAddressModal && (
        <SendAddressModal
          visible={true}
          onRequestClose={handleCloseSendAddressModal}
        />
      )}
    </>
  );
};

export default OpenAddressModal;
