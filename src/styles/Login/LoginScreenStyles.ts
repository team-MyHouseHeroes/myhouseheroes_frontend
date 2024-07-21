// src/styles/Login/LoginScreenStyles.ts

import {StyleSheet} from 'react-native';

const LoginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: '20%',
  },
  title: {
    fontSize: 20,
    color: '#FE4F18',
    marginBottom: 40,
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
    borderRadius: 10,
    paddingVertical: 15,
    width: 360,
    height: 60,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  kakaoButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  otherLoginButton: {
    backgroundColor: '#AFB1B6',
    borderRadius: 10,
    paddingVertical: 15,
    width: 360,
    height: 60,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4%',
  },
  otherLoginButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 60,
  },
  footerText: {
    fontSize: 15,
    color: '#000000',
  },
});

export default LoginScreenStyles;
