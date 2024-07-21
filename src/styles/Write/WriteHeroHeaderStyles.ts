// src/styles/Write/WriteHeroHeaderStyles.ts

import {StyleSheet} from 'react-native';

const WriteHeroHeaderStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    height: 60,
  },
  button: {
    fontSize: 20,
    color: '#000000',
    margin: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default WriteHeroHeaderStyles;
