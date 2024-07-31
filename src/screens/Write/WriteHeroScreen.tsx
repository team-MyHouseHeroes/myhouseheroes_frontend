// src/screens/Write/WriteHeroScreen.tsx

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import CheckBox from '@react-native-community/checkbox';
import styles from '../../styles/Write/WriteHeroScreenStyles';
import addImagePlaceholder from 'C:/MyHouseHeroes/myhouseheroes_frontend/src/img/addImage.png';

const WriteHeroScreen = () => {
  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState<string>('');
  const [rememberReward, setRememberReward] = useState<boolean>(false);

  const handleImagePicker = async () => {
    if (images.length >= 10) {
      Alert.alert('최대 10장의 사진만 업로드할 수 있습니다.');
      return;
    }

    const result = await launchImageLibrary({mediaType: 'photo'});
    if (result.didCancel) {
      console.log('사용자가 이미지 선택을 취소했습니다');
    } else if (result.errorCode) {
      console.log('이미지 선택 오류: ', result.errorMessage);
    } else if (result.assets && result.assets.length > 0) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  const handleDeleteImage = (uri: string) => {
    setImages(images.filter(image => image !== uri));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>사진 선택</Text>
        <ScrollView horizontal contentContainerStyle={styles.imageContainer}>
          <TouchableOpacity onPress={handleImagePicker}>
            <Image source={addImagePlaceholder} style={styles.image} />
          </TouchableOpacity>
          {images.map((uri, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image source={{uri}} style={styles.image} />
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteImage(uri)}>
                <Text style={styles.deleteButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>제목</Text>
        <TextInput
          style={styles.input}
          placeholder="제목을 입력하세요"
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>내용 작성</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder={
            '히어로 활동 홍보를 위한 게시글 내용을 작성해주세요\n\n신뢰할 수 있는 내용을 작성해주세요\n\n가이드라인에 위배되는 내용일 시에는 히어로 활동이 정지될 수 있으니 참고해주세요'
          }
          multiline
          textAlignVertical="top"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>보상</Text>
        <TextInput style={styles.input} placeholder="보상을 입력하세요" />
        <View style={styles.checkboxContainer}>
          <Text
            style={[
              styles.checkboxLabel,
              {color: rememberReward ? '#FE4F18' : '#AFB1B6'},
            ]}>
            입력 사항 기억하기
          </Text>
          <CheckBox
            value={rememberReward}
            onValueChange={setRememberReward}
            tintColors={{true: '#FE4F18', false: '#AFB1B6'}}
            style={styles.checkbox}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default WriteHeroScreen;
