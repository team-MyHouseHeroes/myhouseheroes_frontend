// src/styles/MY/MYHeroScreenStyles.ts

import {StyleSheet} from 'react-native';

const MYHeroScreenStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileTextContainer: {
    flex: 1,
  },
  userType: {
    fontSize: 12,
    color: '#A0A0A0',
    marginBottom: 4,
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 8,
  },
  editProfileIcon: {
    padding: 4,
  },
  editProfileImage: {
    width: 24,
    height: 24,
  },
  schoolName: {
    fontSize: 15,
    color: '#000000',
    marginVertical: 4,
  },
  introText: {
    fontSize: 15,
    textAlign: 'left',
    marginLeft: 8,
    marginVertical: 8,
    lineHeight: 20,
    color: '#000000',
  },
  ratingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  ratingBox: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  ratingValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  ratingLabel: {
    fontSize: 10,
    color: '#A0A0A0',
    marginTop: 4,
  },
  rankButton: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 16,
    marginVertical: 12,
    alignItems: 'center',
    width: '100%',
    height: 60,
  },
  rankButtonText: {
    fontSize: 15,
    color: '#000000',
    flex: 1,
  },
  rankButtonRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heroRankText: {
    fontSize: 12,
    color: '#A0A0A0',
    marginRight: 8,
  },
  rightIcon: {
    width: 20,
    height: 20,
  },
  menuContainer: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#F2F2F2',
  },
  subMenu: {
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    color: '#000000',
  },
});

export default MYHeroScreenStyles;
