import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const moon = require('src/assets/icons/moon.png');
const slesh = require('src/assets/icons/slesh.png');
const back = require('src/assets/icons/back.png');

const { width } = Dimensions.get('window');

const TopGradient = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,1)']}
      style={styles.linearGradient}>
      <View style={styles.titleWrapper}>
        <Image source={back} style={styles.backIcon} />
        <Image source={moon} style={styles.image} />
        <Text style={styles.title}>MoonDust</Text>
      </View>
      <Text style={styles.subTitle}>YOUR PROGRAM</Text>
      <View style={styles.dayWrapper}>
        <Text style={styles.weekText}>Week 2</Text>
        <Image source={slesh} style={styles.slesh} />
        <Text style={styles.dayText}>Day 3</Text>
      </View>
      <View style={styles.progressWrapper}>
        <View style={[styles.progress, { width: ((width - 40) / 7) * 3 }]} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 280,
    width: width,
    paddingRight: 0,
    paddingTop: 50,
  },
  titleWrapper: {
    width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backIcon: {
    position: 'absolute',
    left: 30,
    height: 35,
    width: 30,
  },
  image: {
    width: 27,
    height: 27,
    marginRight: 5,
  },
  title: {
    color: '#eee',
    fontSize: 27,
  },
  subTitle: {
    color: '#ccc',
    fontSize: 17,
    marginTop: 25,
    letterSpacing: 4,
    textAlign: 'center',
  },
  dayWrapper: {
    width,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 35,
  },
  weekText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 0,
  },
  dayText: {
    color: 'white',
    fontSize: 25,
    marginTop: 10,
  },
  slesh: {
    width: 30,
    height: 50,
  },
  progressWrapper: {
    height: 5,
    width: width - 40,
    backgroundColor: '#555',
    marginTop: 25,
    marginLeft: 20,
    borderRadius: 2,
  },
  progress: {
    height: 5,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
});

export default TopGradient;
