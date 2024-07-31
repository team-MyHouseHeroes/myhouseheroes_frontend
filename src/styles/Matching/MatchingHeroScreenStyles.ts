import {StyleSheet} from 'react-native';

const MatchingHeroScreenStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#000000',
  },
  titlecontainer: {
    marginLeft: 4,
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
    marginBottom: 16,
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
    marginLeft: '35%',
  },
  matchButton: {
    backgroundColor: '#FE4F18',
    paddingVertical: 16,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 16,
    width: '90%',
  },
  matchButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default MatchingHeroScreenStyles;
