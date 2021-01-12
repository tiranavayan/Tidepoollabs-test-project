import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import TopGradient from 'src/components/program/topGradient';
import LessonItem from 'src/components/program/lessonItem';
import LoadMoreLessons from 'src/components/program/loadMoreLessons';

import { getLessons } from 'src/services/lessonsSvc';

const Header = () => {
  const [lessons, setlessons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const upLessonsCount = useCallback(() => {
    getLessons({ page, count: 10 }).then((response) => {
      setlessons((currentLessons) => [...currentLessons, ...response.lessons]);
      setPage((currentPage) => currentPage + 1);
      if (!total) {
        setTotal(response.total);
      }
    });
  }, [page, total]);

  useEffect(() => {
    upLessonsCount();
  }, []);

  return (
    <View>
      <TopGradient />
      <Text style={styles.subTitle}>BODY & MIND</Text>
      <Text style={styles.mainText}>
        Learning to optimize your body and mind for sleep
      </Text>
      <Text style={styles.title}>Lessons</Text>
      <FlatList
        data={lessons}
        renderItem={LessonItem}
        keyExtractor={(item) => `${item.id} ${item.uuid}`}
        horizontal={true}
        ListFooterComponent={() => (
          lessons.length < total ? <LoadMoreLessons onPress={upLessonsCount} /> : null
        )}
      />
      <Text style={styles.title}>Activities</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    color: '#ccc',
    fontSize: 17,
    letterSpacing: 4,
    textAlign: 'center',
    marginTop: 25,
  },
  mainText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 15,
    marginHorizontal: 30,
  },
  title: {
    color: 'white',
    fontSize: 21,
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
});

export default Header;
