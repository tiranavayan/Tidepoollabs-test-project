import React from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native';

import { TopGradient, LessonItem } from 'src/components/program';

const { width } = Dimensions.get('window');

export default Header = ({ }) => {
  return (
    <View style={styles.topComponent}>
      <TopGradient />
      <Text style={{ color: 'white', fontSize: 20, letterSpacing: 4, textAlign: 'center', marginTop: 25 }}>
        BODY & MIND
      </Text>
      <Text style={{ color: 'white', fontSize: 25, fontWeight: '600', textAlign: 'center', marginTop: 15, marginHorizontal: 30 }}>
        Learning to optimize your body and mind for sleep
      </Text>
      <Text style={{ color: 'white', fontSize: 23, marginTop: 20, marginLeft: 10, marginBottom: 10 }}>
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
      />
      <Text style={{ color: 'white', fontSize: 23, marginTop: 20, marginLeft: 10, marginBottom: 10 }}>
        Activities
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({

});