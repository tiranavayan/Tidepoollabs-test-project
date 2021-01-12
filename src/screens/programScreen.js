import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StatusBar,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Header, ActivityItem, LoadMoreActivity } from 'src/components/program';

const backgroundImage = require('src/assets/images/background.jpg');

const ProgramScreen = () => {
  return (
    <SafeAreaView style={styles.containerWrapper}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ImageBackground
        source={backgroundImage}
        style={styles.container}
        imageStyle={{ resizeMode: 'cover' }}>
        <FlatList
          data={[
            {
              key: 1,
              title: 'MoonDust Activity Guide',
              text: 'Lorem ipsum dolor sit amet.',
            },
            {
              key: 2,
              title: 'Understanding Sleep',
              text: 'Lorem ipsum dolor sit amet.',
            },
            {
              key: 3,
              title: 'Understanding Sleep',
              text: 'Lorem ipsum dolor sit amet.',
            },
            {
              key: 4,
              title: 'Understanding Sleep',
              text: 'Lorem ipsum dolor sit amet.',
            },
            {
              key: 5,
              title: 'Understanding Sleep',
              text: 'Lorem ipsum dolor sit amet.',
            },
          ]}
          renderItem={ActivityItem}
          keyExtractor={(item) => item.key}
          ListHeaderComponent={Header}
          ListFooterComponent={LoadMoreActivity}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProgramScreen;
