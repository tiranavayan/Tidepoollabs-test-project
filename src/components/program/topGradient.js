import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

export default TopGradient = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,1)']}
      style={{
        height: 280,
        width: width,
        paddingRight: 0,
        paddingTop: 50,
      }}
    >
      <View style={{ width, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={{ width: 30, height: 30, marginRight: 10 }}
        />
        <Text style={{ color: 'white', fontSize: 30 }}>
          MoonDust
        </Text>
      </View>
      <Text style={{ color: 'white', fontSize: 20, marginTop: 25, letterSpacing: 4, textAlign: 'center' }}>
        YOUR PROGRAM
      </Text>
      <View style={{ width, flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', marginTop: 20 }}>Week 2</Text>
        <Text style={{ color: 'white', fontSize: 60 }}> / </Text>
        <Text style={{ color: 'white', fontSize: 25, marginTop: 30 }}>Day 3</Text>
      </View>
      <View style={{ height: 5, width: width - 40, backgroundColor: '#555', marginTop: 10, marginLeft: 20, borderRadius: 2 }}>
        <View style={{ height: 5, width: (width - 40) / 7 * 3, backgroundColor: '#fff', borderRadius: 2 }} />
      </View>
    </LinearGradient>
  )
};

const styles = StyleSheet.create({

});