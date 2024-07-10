// src/styles/Home/homescreenStyles.ts

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  filterButton: {
    flexDirection: 'row',
    padding: 8,
    color: '#FFFFFF',
    borderRadius: 4,
    alignItems: 'center',
  },
  filterButtonText: {
    marginRight: 8,
    fontSize: 16,
    color: '#000000',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  itemContent: {
    flex: 1,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
    marginRight: 40,
  },
  itemDescriptionTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemDescription: {
    flex: 1,
    fontSize: 10,
    color: '#000000',
    marginRight: 8,
  },
  itemTime: {
    fontSize: 10,
    color: '#000000',
    marginRight: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 8,
  },
  icon: {
    width: 16,
    height: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 배경
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    elevation: 5, // 그림자
  },
  modalButton: {
    marginBottom: 12, // 각 버튼 사이의 간격 조정
  },
});

export default styles;
