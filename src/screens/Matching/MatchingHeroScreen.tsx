// C:\MyHouseHeroes\myhouseheroes_frontend\src\screens\Matching\MatchingHeroScreen.tsx

import React from 'react';
import {View, Text, Image, Button, ScrollView} from 'react-native';
import MatchingHeader from '../../components/Matching/MatchingHeader'; // import the new header
import styles from '../../styles/Matching/MatchingHeroScreenStyles';

const MatchingHeroScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MatchingHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>살려주세요</Text>
        <View style={styles.imageContainer}>
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
        </View>
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
            <Text style={styles.userName}>죽어가는 눈송이</Text>
            <Text style={styles.userStatus}>호스트 등급 5등급</Text>
          </View>
          <Button
            title="매칭 요청하기"
            onPress={() => {
              /* 매칭 요청 함수 */
            }}
            color="#ff6f00"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MatchingHeroScreen;
