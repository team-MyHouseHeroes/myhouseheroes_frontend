// src/components/Write/WriteHeroHeader.tsx

import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/Write/WriteHeroHeaderStyles';
import ConfirmationHeroModal from './ConfirmationHeroModal';

const WriteHeroHeader = () => {
  const navigation = useNavigation();
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const handleRegister = () => {
    setConfirmationVisible(true);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.button}>취소</Text>
      </TouchableOpacity>
      <Text style={styles.title}>홍보 작성</Text>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.button}>등록</Text>
      </TouchableOpacity>
      <ConfirmationHeroModal
        visible={confirmationVisible}
        onClose={() => setConfirmationVisible(false)}
      />
    </View>
  );
};

export default WriteHeroHeader;
