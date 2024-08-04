// src/screens/Home/HomeScreen.tsx

import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import styles from '../../styles/Home/HomeScreenStyles';
import StatusButton from '../../components/Home/StatusButton';
import PostFilterModal from '../../components/Home/PostFilterModal';
import PostSortModal from '../../components/Home/PostSortModal';

const downIcon = require('../../img/downIcon.png');

const data = [
  {
    id: '1',
    title: '살려주세요 살려주세요 빨리 와주세요',
    description: '죽어가는 눈송이 / 호스트 등급 5등급',
    time: '1분 전',
    image: require('../../img/homescreenhost1.png'),
    status: '요청 중',
  },
  {
    id: '2',
    title: '무엇이든지 해결해주는 해결사 눈송이 입니다',
    description: '해결사 눈송이 / 히어로 등급 2등급',
    time: '5분 전',
    image: require('../../img/homescreenhero1.png'),
  },
  {
    id: '3',
    title: '세상에서 제일 벌레를 잘 잡습니다 믿어주세요',
    description: '벌레잡이 눈송이 / 히어로 등급 1등급',
    time: '30분 전',
    image: require('../../img/homescreenhero2.png'),
  },
  {
    id: '4',
    title: '지금 정말 큰일 났습니다 도와주세요',
    description: '울고있는 눈송이 / 호스트 등급 2등급',
    time: '30분 전',
    image: require('../../img/homescreenhost2.png'),
    status: '퇴치 중',
  },
  {
    id: '5',
    title: '도와주세요 사례는 넉넉히 하겠습니다',
    description: '더러운 눈송이 / 호스트 등급 3등급',
    time: '1시간 전',
    image: require('../../img/homescreenhost3.png'),
    status: '퇴치 완료',
  },
];

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState('전체');
  const [selectedSort, setSelectedSort] = useState('최신순');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [sortModalVisible, setSortModalVisible] = useState(false);

  const toggleFilterModal = () => {
    setFilterModalVisible(!filterModalVisible);
  };

  const toggleSortModal = () => {
    setSortModalVisible(!sortModalVisible);
  };

  const renderItem = ({item}) => {
    const itemContentStyle = item.status
      ? styles.itemContent
      : [styles.itemContent, {marginBottom: 28}];

    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={itemContentStyle}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.itemDescriptionTimeContainer}>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemTime}>{item.time}</Text>
          </View>
          {item.status && <StatusButton text={item.status} />}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={toggleFilterModal}>
          <Text style={styles.filterButtonText}>{selectedFilter}</Text>
          <Image source={downIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={toggleSortModal}>
          <Text style={styles.filterButtonText}>{selectedSort}</Text>
          <Image source={downIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <PostFilterModal
        visible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        onSelectFilter={filter => {
          setSelectedFilter(filter);
          setFilterModalVisible(false);
        }}
        selectedFilter={selectedFilter}
      />

      <PostSortModal
        visible={sortModalVisible}
        onClose={() => setSortModalVisible(false)}
        onSelectSort={sort => {
          setSelectedSort(sort);
          setSortModalVisible(false);
        }}
        selectedSort={selectedSort}
      />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default Home;
