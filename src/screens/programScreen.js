import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StatusBar,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Header, ActivityItem } from 'src/components/program';

const backgroundImage = require('src/assets/images/background.jpg');

export default ProgramScreen = ({ title }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ImageBackground
        source={backgroundImage}
        style={styles.container}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <FlatList
          data={[
            { key: 1, title: 'MoonDust Activity Guide', text: 'Lorem ipsum dolor sit amet.' },
            { key: 2, title: 'Understanding Sleep', text: 'Lorem ipsum dolor sit amet.' },
            { key: 3, title: 'Understanding Sleep', text: 'Lorem ipsum dolor sit amet.' },
            { key: 4, title: 'Understanding Sleep', text: 'Lorem ipsum dolor sit amet.' },
            { key: 5, title: 'Understanding Sleep', text: 'Lorem ipsum dolor sit amet.' },
          ]}
          renderItem={ActivityItem}
          keyExtractor={item => item.key}
          ListHeaderComponent={Header}
        />
      </ImageBackground>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});