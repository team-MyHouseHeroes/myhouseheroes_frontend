// src/screens/Matching/MatchingHeroScreen.tsx

import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import MatchingHeader from '../../components/Matching/MatchingHeader';
import RequestMatching from '../../components/Matching/RequestMatching';
import RequestMatchingAlarm from '../../components/Matching/RequestMatchingAlarm';
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
  const [isRequesting, setIsRequesting] = useState(false);

  const handleRequestMatching = () => {
    setModalVisible(true);
    setTimeout(() => {
      setIsRequesting(true);
      setModalVisible(false);
    }, 1500);
  };

  return (
    <View style={{flex: 1}}>
      <MatchingHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titlecontainer}>
          <Text style={styles.detailTitle}>호스트 요청</Text>
          <Text style={styles.title}>{dummyData.title}</Text>
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
            <Text style={styles.requestStatus}>{dummyData.requestStatus}</Text>
          </View>
        </View>
      </ScrollView>
      <RequestMatching
        onPress={handleRequestMatching}
        isRequesting={isRequesting}
      />
      <RequestMatchingAlarm
        visible={modalVisible}
        onDismiss={() => setIsRequesting(false)}
      />
    </View>
  );
};

export default MatchingHeroScreen;
