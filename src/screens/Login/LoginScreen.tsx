// src/screens/Login/LoginScreen.tsx

import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import KakaoLogins, {login, getProfile} from '@react-native-seoul/kakao-login';
import styles from '../../styles/Login/LoginScreenStyles';

const LoginScreen = ({onLoginSuccess}) => {
  const navigation = useNavigation();

  const handleKakaoLogin = async () => {
    try {
      const token = await signInWithKakao();
      console.log('Kakao login success:', token);
      const profile = await getKakaoProfile();
      console.log('Kakao profile:', profile);
      // 로그인 성공 시 상태 업데이트
      onLoginSuccess();
      // 로그인 성공 후 MainScreen으로 이동
      navigation.navigate('Main');
    } catch (err) {
      console.error('Kakao login failed:', err);
    }
  };

  const signInWithKakao = async () => {
    return await login()
      .then(result => {
        return result;
      })
      .catch(error => {
        throw error;
      });
  };

  const getKakaoProfile = async () => {
    return await getProfile()
      .then(result => {
        return result;
      })
      .catch(error => {
        throw error;
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../img/logo.png')} style={styles.logo} />
      <Text style={styles.title}>우리집 히어로즈</Text>
      <TouchableOpacity style={styles.kakaoButton} onPress={handleKakaoLogin}>
        <Text style={styles.kakaoButtonText}>카카오톡으로 로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.otherLoginButton}
        onPress={() => {
          /* 다른 로그인 방법 처리 */
        }}>
        <Text style={styles.otherLoginButtonText}>다른 방법으로 로그인</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          아이디 찾기 | 비밀번호 찾기 | 회원가입
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
