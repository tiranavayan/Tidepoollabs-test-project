import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { TopGradient, LessonItem, LoadMoreLessons } from 'src/components/program';

export default Header = () => {
  return (
    <View>
      <TopGradient />
      <Text style={styles.subTitle}>
        BODY & MIND
      </Text>
      <Text style={styles.mainText}>
        Learning to optimize your body and mind for sleep
      </Text>
      <Text style={styles.title}>
        Lessons
      </Text>
      <FlatList
        data={[
          { key: 1, number: '1.1', title: 'Understanding Sleep' },
          { key: 2, number: '1.1', title: 'Understanding Sleep' },
          { key: 3, number: '1.1', title: 'Understanding Sleep' },
          { key: 4, number: '1.1', title: 'Understanding Sleep' },
          { key: 5, number: '1.1', title: 'Understanding Sleep' },
        ]}
        renderItem={LessonItem}
        keyExtractor={item => item.key}
        horizontal={true}
        ListFooterComponent={LoadMoreLessons}
      />
      <Text style={styles.title}>
        Activities
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    color: '#ccc',
    fontSize: 17,
    letterSpacing: 4,
    textAlign: 'center',
    marginTop: 25
  },
  mainText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 15,
    marginHorizontal: 30
  },
  title: {
    color: 'white',
    fontSize: 21,
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10
  }
});