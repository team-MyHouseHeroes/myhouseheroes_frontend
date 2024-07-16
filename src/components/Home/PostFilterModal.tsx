import React from 'react';
import {View, Text, Modal, Pressable} from 'react-native';
import styles from '../../styles/Home/HomeScreenStyles';

const PostFilterModal = ({
  visible,
  onClose,
  onSelectFilter,
  selectedFilter,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredViewFilterModal}>
        <View style={styles.modalViewFilterModal}>
          <Pressable
            style={styles.modalButton}
            onPress={() => {
              onSelectFilter('전체');
              onClose();
            }}>
            <Text
              style={[
                styles.modalButtonText,
                selectedFilter === '전체'
                  ? styles.selectedText
                  : styles.grayText,
              ]}>
              전체
            </Text>
          </Pressable>
          <Pressable
            style={styles.modalButton}
            onPress={() => {
              onSelectFilter('호스트 요청');
              onClose();
            }}>
            <Text
              style={[
                styles.modalButtonText,
                selectedFilter === '호스트 요청'
                  ? styles.selectedText
                  : styles.grayText,
              ]}>
              호스트 요청
            </Text>
          </Pressable>
          <Pressable
            style={styles.modalButton}
            onPress={() => {
              onSelectFilter('히어로 홍보');
              onClose();
            }}>
            <Text
              style={[
                styles.modalButtonText,
                selectedFilter === '히어로 홍보'
                  ? styles.selectedText
                  : styles.grayText,
              ]}>
              히어로 홍보
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default PostFilterModal;
