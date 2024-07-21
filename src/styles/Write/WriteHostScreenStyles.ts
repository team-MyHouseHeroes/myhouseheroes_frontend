import {StyleSheet} from 'react-native';

const WriteHostScreenStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  section: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 12,
    color: '#000000',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1.5,
    borderColor: '#AFB1B6',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  textArea: {
    height: 150,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
    margin: 4,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    resizeMode: 'cover',
    marginLeft: 4,
  },
  deleteButton: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#AFB1B6',
    borderRadius: 20,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default WriteHostScreenStyles;
