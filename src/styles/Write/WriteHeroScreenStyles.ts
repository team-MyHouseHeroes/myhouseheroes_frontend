// src/styles/Write/WriteHeroScreenStyles.ts

import {StyleSheet} from 'react-native';

const WriteHostScreenStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  section: {
    width: '100%',
    marginBottom: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,
    color: '#000000',
  },
  checkboxLabel: {
    fontSize: 14,
    marginLeft: '60%',
  },
  checkbox: {
    marginLeft: 'auto',
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
    height: 240,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
    margin: 5,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
    resizeMode: 'cover',
    marginLeft: 5,
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
});

export default WriteHostScreenStyles;
