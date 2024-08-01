// src/styles/Matching/MatchingHostScreenStyles.ts

import {StyleSheet} from 'react-native';

const MatchingHostScreenStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    color: '#000000',
  },
  titlecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    marginRight: 4,
    marginTop: '8%',
  },
  icon: {
    width: 40,
    height: 40,
  },
  titleTextContainer: {
    flex: 1,
  },
  imageScrollContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginRight: 8,
  },
  detailsContainer: {
    backgroundColor: '#ffffff',
    padding: 4,
    borderRadius: 8,
    marginBottom: 8,
  },
  detailTitle: {
    fontSize: 12,
    marginBottom: 12,
    color: '#CDCDCD',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 12,
    color: '#000000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 160,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    color: '#000000',
    marginLeft: '4%',
  },
  userStatus: {
    fontSize: 14,
    color: '#888888',
    marginLeft: '4%',
  },
  requestStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: '45%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '35%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    position: 'absolute',
    top: '80%',
    left: '55%',
  },
  modalOption: {
    padding: 8,
    width: '100%',
    alignItems: 'flex-start',
  },
  selectedOption: {
    backgroundColor: '#FFFFFF',
  },
  modalOptionText: {
    fontSize: 14,
    color: '#AFB1B6',
  },
  selectedOptionText: {
    color: '#000000',
  },
});

export default MatchingHostScreenStyles;
