import React from 'react';
import {View, Text, Modal, Pressable} from 'react-native';
import styles from '../../styles/Home/HomeScreenStyles';

const PostSortModal = ({visible, onClose, onSelectSort, selectedSort}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredViewSortModal}>
        <View style={styles.modalViewSortModal}>
          <Pressable
            style={styles.modalButton}
            onPress={() => {
              onSelectSort('최신순');
              onClose();
            }}>
            <Text
              style={[
                styles.modalButtonText,
                selectedSort === '최신순'
                  ? styles.selectedText
                  : styles.grayText,
              ]}>
              최신순
            </Text>
          </Pressable>
          <Pressable
            style={styles.modalButton}
            onPress={() => {
              onSelectSort('등급순');
              onClose();
            }}>
            <Text
              style={[
                styles.modalButtonText,
                selectedSort === '등급순'
                  ? styles.selectedText
                  : styles.grayText,
              ]}>
              등급순
            </Text>
          </Pressable>
          <Pressable
            style={styles.modalButton}
            onPress={() => {
              onSelectSort('보상순');
              onClose();
            }}>
            <Text
              style={[
                styles.modalButtonText,
                selectedSort === '보상순'
                  ? styles.selectedText
                  : styles.grayText,
              ]}>
              보상순
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default PostSortModal;
