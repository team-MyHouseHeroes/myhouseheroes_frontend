import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styles from '../../styles/Alarm/AlarmHeroScreenStyles';
import MapImage from '../../img/MapImage.png';

const alarmData = [
  {
    id: '1',
    message:
      '죽어가는 눈송이 호스트님이 매칭 요청을 수락했습니다. 호스트님의 주소를 확인해주세요!',
    image: require('../../img/alarmscreenhost1.png'),
    address:
      '04310 서울특별시 용산구 청파로47길 100 (청파동2가) 숙명여자대학교',
  },
  {
    id: '2',
    message:
      '청파동 집순이 호스트님과의 매칭은 어떠셨나요? 후기를 작성해주세요!',
    image: require('../../img/alarmscreenhost2.png'),
  },
  {
    id: '3',
    message: '집이 없어 호스트님이 히어로님께 후기를 작성했습니다!',
    image: require('../../img/alarmscreenhost3.png'),
  },
];

const boldHostName = message => {
  const hostNameEndIndex = message.indexOf(' 호스트님');
  if (hostNameEndIndex === -1) {
    return <Text style={styles.text}>{message}</Text>;
  }

  const hostName = message.substring(0, hostNameEndIndex);
  const restOfMessage = message.substring(hostNameEndIndex);

  return (
    <Text style={styles.text}>
      <Text style={styles.boldText}>{hostName}</Text>
      {restOfMessage}
    </Text>
  );
};

const AlarmItem = ({item}) => {
  return (
    <View style={styles.alarmItem}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        {boldHostName(item.message)}
        {item.address && (
          <View style={styles.addressContainer}>
            <Text style={styles.addressText}>{item.address}</Text>
            {/* 지도 이미지를 보여주는 Image 컴포넌트 */}
            <Image source={MapImage} style={styles.mapImage} />
          </View>
        )}
      </View>
    </View>
  );
};

const AlarmHostScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={alarmData}
        renderItem={({item}) => <AlarmItem item={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default AlarmHostScreen;
