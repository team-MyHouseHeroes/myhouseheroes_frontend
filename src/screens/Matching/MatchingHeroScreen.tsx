// src/screens/Matching/MatchingHeroScreen.tsx

import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import MatchingHeader from '../../components/Matching/MatchingHeader';
import ChangeStatusModal from '../../components/Matching/ChangeStatusModal';
import styles from '../../styles/Matching/MatchingHeroScreenStyles';

// Dummy Data

const dummyData = {
  title: '살려주세요',
  images: [
    require('../../img/matchingscreenImage1.png'),
    require('../../img/matchingscreenImage2.png'),
    require('../../img/matchingscreenImage3.png'),
  ],
  bugType: '바퀴벌레',
  reward: '10000원',
  tools: '살충제, 휴지, 전기 파리채',
  additionalInfo:
    '세탁기 아래로 들어갔는데 꺼내서 잡아주셔야 할 것 같습니다. 정말 간절합니다. 학교 근처 5분 거리 자취방입니다.',
  userName: '죽어가는 눈송이',
  userStatus: '호스트 등급 5등급',
  requestStatus: '요청 중',
};

const MatchingHeroScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [requestStatus, setRequestStatus] = useState(dummyData.requestStatus);

  const handleMoreIconPress = () => {
    // 아이콘 클릭 시 동작을 여기에 추가
  };

  const handleStatusPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleStatusSelect = status => {
    setRequestStatus(status);
    setModalVisible(false);
  };

  return (
    <View style={{flex: 1}}>
      <MatchingHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titlecontainer}>
          <View style={styles.titleTextContainer}>
            <Text style={styles.detailTitle}>호스트 요청</Text>
            <Text style={styles.title}>{dummyData.title}</Text>
          </View>
          <TouchableOpacity
            onPress={handleMoreIconPress}
            style={styles.iconContainer}>
            <Image
              source={require('../../img/moreIcon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.imageScrollContainer}>
          {dummyData.images.map((image, index) => (
            <Image key={index} source={image} style={styles.image} />
          ))}
        </ScrollView>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailTitle}>벌레 종류</Text>
          <Text style={styles.detailText}>{dummyData.bugType}</Text>
          <Text style={styles.detailTitle}>보상</Text>
          <Text style={styles.detailText}>{dummyData.reward}</Text>
          <Text style={styles.detailTitle}>도구</Text>
          <Text style={styles.detailText}>{dummyData.tools}</Text>
          <Text style={styles.detailTitle}>기타 사항</Text>
          <Text style={styles.detailText}>{dummyData.additionalInfo}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.userInfo}>
            <Image
              source={require('../../img/myscreenhost.png')}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{dummyData.userName}</Text>
              <Text style={styles.userStatus}>{dummyData.userStatus}</Text>
            </View>
            <TouchableOpacity onPress={handleStatusPress}>
              <Text style={styles.requestStatus}>{requestStatus}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <ChangeStatusModal
        visible={modalVisible}
        onClose={handleModalClose}
        onSelect={handleStatusSelect}
        selectedStatus={requestStatus}
      />
    </View>
  );
};

export default MatchingHeroScreen;
