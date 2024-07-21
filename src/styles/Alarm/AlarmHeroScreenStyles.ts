// src/styles/Alarm/AlarmHeroScreenStyles.ts

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContainer: {
    padding: 10,
  },
  text: {
    fontSize: 15,
    flex: 1,
    color: '#000000',
    marginLeft: 24,
    marginRight: 18,
  },
  boldText: {
    fontWeight: 'bold',
  },
  alarmItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 15,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  separator: {
    height: 1,
    backgroundColor: '#F2F2F2',
    marginVertical: 10,
  },
  addressContainer: {
    marginTop: 16,
    marginBottom: 10,
    alignItems: 'center',
    marginLeft: '7%',
  },
  addressText: {
    fontSize: 15,
    color: '#000000',
    marginBottom: 12,
  },
});

export default styles;
