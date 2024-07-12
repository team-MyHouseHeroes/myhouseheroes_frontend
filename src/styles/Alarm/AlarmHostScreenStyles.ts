// src/styles/Alarm/AlarmHostScreenStyles.ts

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
    marginRight: 12,
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
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'flex-start',
    marginLeft: 164,
    marginTop: 12,
  },
  acceptButton: {
    backgroundColor: '#FE4F18',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
    alignSelf: 'center',
  },
  rejectButton: {
    backgroundColor: '#AFB1B6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  reviewButton: {
    backgroundColor: '#FE4F18',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 12,
    alignSelf: 'center',
    marginLeft: 160,
    width: 140,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: '100%',
  },
  alarmContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '12%',
    marginTop: '120%',
  },
  modalText: {
    fontSize: 15,
    marginBottom: 16,
    textAlign: 'center',
    color: '#000000',
    marginTop: 16,
  },
  modalButton: {
    backgroundColor: '#FE4F18',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;
