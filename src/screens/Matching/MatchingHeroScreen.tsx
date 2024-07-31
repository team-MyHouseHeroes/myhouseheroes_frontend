import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import MatchingHeader from '../../components/Matching/MatchingHeader';
import styles from '../../styles/Matching/MatchingHeroScreenStyles';

const MatchingHeroScreen = () => {
  const [requestStatus, setRequestStatus] = useState('요청 중');

  return (
    <View style={{flex: 1}}>
      <MatchingHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titlecontainer}>
          <Text style={styles.detailTitle}>호스트 요청</Text>
          <Text style={styles.title}>살려주세요</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.imageScrollContainer}>
          <Image
            source={require('../../img/matchingscreenImage1.png')}
            style={styles.image}
          />
          <Image
            source={require('../../img/matchingscreenImage2.png')}
            style={styles.image}
          />
          <Image
            source={require('../../img/matchingscreenImage3.png')}
            style={styles.image}
          />
        </ScrollView>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailTitle}>벌레 종류</Text>
          <Text style={styles.detailText}>바퀴벌레</Text>
          <Text style={styles.detailTitle}>보상</Text>
          <Text style={styles.detailText}>10000원</Text>
          <Text style={styles.detailTitle}>도구</Text>
          <Text style={styles.detailText}>살충제, 휴지, 전기 파리채</Text>
          <Text style={styles.detailTitle}>기타 사항</Text>
          <Text style={styles.detailText}>
            세탁기 아래로 들어갔는데 꺼내서 잡아주셔야 할 것 같습니다. 정말
            간절합니다. 학교 근처 5분 거리 자취방입니다.
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.userInfo}>
            <Image
              source={require('C:/MyHouseHeroes/myhouseheroes_frontend/src/img/myscreenhost.png')}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>죽어가는 눈송이</Text>
              <Text style={styles.userStatus}>호스트 등급 5등급</Text>
            </View>
            <Text style={styles.requestStatus}>{requestStatus}</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.matchButton}
        onPress={() => {
          /* 매칭 요청 함수 */
        }}>
        <Text style={styles.matchButtonText}>매칭 요청하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MatchingHeroScreen;
