// src/screens/MY/MYHeroScreen.tsx

import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../../styles/MY/MYHeroScreenStyles';

const MYHeroScreen = () => {
  // Dummy data
  const profileImage = require('C:/MyHouseHeroes/myhouseheroes_frontend/src/img/myscreenhero.png');
  const rightIcon = require('C:/MyHouseHeroes/myhouseheroes_frontend/src/img/rightIcon.png');
  const editProfileIcon = require('C:/MyHouseHeroes/myhouseheroes_frontend/src/img/editprofileIcon.png');
  const userType = '히어로';
  const userName = '바잡송';
  const schoolName = '숙명여자대학교';
  const introText =
    '안녕하세요 청파동 바잡송입니다\n여러분을 위해 항상 준비되어 있습니다';
  const ratings = {rating: '5.0', reviews: '20', completions: '10'};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.userType}>{userType}</Text>
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>{userName}</Text>
            <TouchableOpacity style={styles.editProfileIcon}>
              <Image source={editProfileIcon} style={styles.editProfileImage} />
            </TouchableOpacity>
          </View>
          <Text style={styles.schoolName}>{schoolName}</Text>
        </View>
      </View>
      <Text style={styles.introText}>{introText}</Text>
      <View style={styles.rankButton}>
        <Text style={styles.rankButtonText}>용감하게 벌레 잡는 손</Text>
        <View style={styles.rankButtonRight}>
          <Text style={styles.heroRankText}>히어로 등급</Text>
          <TouchableOpacity>
            <Image source={rightIcon} style={styles.rightIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ratingsContainer}>
        <TouchableOpacity style={styles.ratingBox}>
          <Text style={styles.ratingValue}>{ratings.rating}</Text>
          <Text style={styles.ratingLabel}>평점</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ratingBox}>
          <Text style={styles.ratingValue}>{ratings.reviews}</Text>
          <Text style={styles.ratingLabel}>리뷰</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ratingBox}>
          <Text style={styles.ratingValue}>{ratings.completions}</Text>
          <Text style={styles.ratingLabel}>단골 등록</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity>
          <Text style={styles.subMenu}>본인 인증</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.subMenu}>주소 인증</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.subMenu}>알림 설정</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.subMenu}>벌레 퇴치 방법</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.subMenu}>이용약관</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.subMenu}>고객센터</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.subMenu}>로그아웃</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.subMenu}>탈퇴하기</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.subMenu}>앱 정보</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MYHeroScreen;
