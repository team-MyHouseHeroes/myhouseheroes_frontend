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
import styles from '../../styles/Write/WriteHostScreenStyles';
import addImagePlaceholder from 'C:/MyHouseHeroes/myhouseheroes_frontend/src/img/addImage.png';

const WriteHostScreen = () => {
  const [images, setImages] = useState<string[]>([]);

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
        <Text style={styles.label}>벌레 사진</Text>
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
        <Text style={styles.label}>벌레 종류</Text>
        <TextInput style={styles.input} placeholder="벌레 종류를 입력하세요" />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>제목</Text>
        <TextInput style={styles.input} placeholder="제목을 입력하세요" />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>보상</Text>
        <TextInput style={styles.input} placeholder="보상을 입력하세요" />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>도구</Text>
        <TextInput style={styles.input} placeholder="도구를 입력하세요" />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>기타 사항 작성</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="히어로 매칭에 도움을 주기 위한 기타 사항을 작성해주세요"
          multiline
          textAlignVertical="top"
        />
      </View>
    </ScrollView>
  );
};

export default WriteHostScreen;
