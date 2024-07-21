// src/styles/Write/RegisterOptionsModalStyles.ts

import {StyleSheet} from 'react-native';

const RegisterOptionsModalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 12,
    left: 36,
    right: 0,
    paddingHorizontal: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    flex: 1,
  },
  saveButton: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  saveButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'flex-start',
    marginVertical: 8,
    width: '100%',
  },
  radioGroup: {
    alignItems: 'flex-start',
    width: '100%',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  radioButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonOuterCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#AFB1B6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  radioButtonOuterCircleSelected: {
    borderColor: '#FE4F18',
  },
  radioButtonInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FE4F18',
  },
  radioButtonLabel: {
    fontSize: 15,
    color: '#000000',
  },
});

export default RegisterOptionsModalStyles;
