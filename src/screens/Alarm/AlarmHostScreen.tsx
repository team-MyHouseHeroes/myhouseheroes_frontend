// src/screens/Alarm/AlarmHostScreen

import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles/Alarm/AlarmHostScreenStyles';
import AcceptAlarmButton from '../../components/Alarm/AcceptAlarmButton';
import RejectAlarmButton from '../../components/Alarm/RejectAlarmButton';
import WriteReviewAlarmButton from '../../components/Alarm/WriteReviewAlarmButton';
import CheckReviewAlarmButton from '../../components/Alarm/CheckReviewAlarmButton';
import OpenAddressModal from '../../components/Alarm/OpenAddressModal';

const alarmData = [
  {
    id: '1',
    message:
      '바잡송 히어로님이 매칭 요청을 보냈습니다. 매칭 요청을 수락하시겠습니까?',
    image: require('../../img/alarmscreenhero1.png'),
  },
  {
    id: '2',
    message:
      '청파동 불주먹 히어로님과의 매칭은 어떠셨나요? 후기를 작성해주세요!',
    image: require('../../img/alarmscreenhero2.png'),
  },
  {
    id: '3',
    message: '맨손 눈송이 히어로님이 호스트님께 후기를 작성했습니다!',
    image: require('../../img/alarmscreenhero3.png'),
  },
];

const boldHeroName = message => {
  const heroNameEndIndex = message.indexOf(' 히어로님');
  if (heroNameEndIndex === -1) {
    return <Text style={styles.text}>{message}</Text>;
  }

  const heroName = message.substring(0, heroNameEndIndex);
  const restOfMessage = message.substring(heroNameEndIndex);

  return (
    <Text style={styles.text}>
      <Text style={styles.boldText}>{heroName}</Text>
      {restOfMessage}
    </Text>
  );
};

const AlarmItem = ({item, index}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  return (
    <View style={styles.alarmItem}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        {boldHeroName(item.message)}
        {index === 1 && <WriteReviewAlarmButton />}
        {index === 2 && <CheckReviewAlarmButton />}
        {index === 0 && (
          <View style={styles.buttonContainer}>
            <AcceptAlarmButton onPress={showModal} />
            <RejectAlarmButton />
          </View>
        )}
      </View>
      <OpenAddressModal visible={isModalVisible} onRequestClose={hideModal} />
    </View>
  );
};

const AlarmHostScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={alarmData}
        renderItem={({item, index}) => <AlarmItem item={item} index={index} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default AlarmHostScreen;
