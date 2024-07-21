// src/components/Write/RegisterOptionsModal.tsx

import React, {useState, useMemo} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import styles from '../../styles/Write/RegisterOptionsModalStyles';

const RadioButton = ({label, value, selectedValue, onSelect}) => {
  const isSelected = value === selectedValue;

  return (
    <TouchableOpacity
      style={styles.radioButtonContainer}
      onPress={() => onSelect(value)}>
      <View style={styles.radioButtonContent}>
        <View
          style={[
            styles.radioButtonOuterCircle,
            isSelected && styles.radioButtonOuterCircleSelected,
          ]}>
          {isSelected && <View style={styles.radioButtonInnerCircle} />}
        </View>
        <Text style={styles.radioButtonLabel}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const RegisterOptionsModal = ({visible, onClose, onSave}) => {
  const genderOptions = useMemo(
    () => [
      {id: '1', label: '남성', value: 'male'},
      {id: '2', label: '여성', value: 'female'},
      {id: '3', label: '성별 무관', value: 'any'},
    ],
    [],
  );

  const gradeOptions = useMemo(
    () => [
      {id: '1', label: '1등급', value: 'grade1'},
      {id: '2', label: '2등급', value: 'grade2'},
      {id: '3', label: '3등급', value: 'grade3'},
      {id: '4', label: '4등급', value: 'grade4'},
      {id: '5', label: '5등급', value: 'grade5'},
      {id: '6', label: '등급 무관', value: 'any'},
    ],
    [],
  );

  const [selectedGender, setSelectedGender] = useState<string | undefined>();
  const [selectedGrade, setSelectedGrade] = useState<string | undefined>();

  const handleSave = () => {
    onSave({
      gender: selectedGender,
      grade: selectedGrade,
    });
    console.log('Saved values: ', {
      gender: selectedGender,
      grade: selectedGrade,
    });
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.modalTitle}>등록 옵션</Text>
            <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
              <Text style={styles.saveButtonText}>저장</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>히어로 성별 선택</Text>
          <View style={styles.radioGroup}>
            {genderOptions.map(option => (
              <RadioButton
                key={option.id}
                label={option.label}
                value={option.value}
                selectedValue={selectedGender}
                onSelect={setSelectedGender}
              />
            ))}
          </View>
          <Text style={styles.sectionTitle}>히어로 등급 선택</Text>
          <View style={styles.radioGroup}>
            {gradeOptions.map(option => (
              <RadioButton
                key={option.id}
                label={option.label}
                value={option.value}
                selectedValue={selectedGrade}
                onSelect={setSelectedGrade}
              />
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RegisterOptionsModal;
