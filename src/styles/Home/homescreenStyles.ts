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
  // PostFilterModal styles
  centeredViewFilterModal: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalViewFilterModal: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    elevation: 5,
    marginRight: '63%',
    marginTop: '30%',
  },
  buttonContainer: {
    backgroundColor: '#FE4F18',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 5,
    width: 100,
    height: 25,
    justifyContent: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // PostSortModal styles
  centeredViewSortModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalViewSortModal: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    elevation: 5,
    marginLeft: '70%',
    marginBottom: '80%',
  },
  // Common modal button styles
  modalButton: {
    marginBottom: 12,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 4,
  },
  modalButtonText: {
    fontSize: 14,
    color: '#000000',
  },
  selectedText: {
    color: '#000000',
  },
  grayText: {
    color: '#CCCCCC',
  },
});

export default styles;
