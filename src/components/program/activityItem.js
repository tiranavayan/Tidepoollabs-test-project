import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default ActivityItem = ({ item }) => (
  <View style={{
    borderRadius: 7,
    width: width - 20,
    height: 75,
    backgroundColor: 'rgba(0,0,0,0.8)',
    marginLeft: 10,
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 10,
    elevation: 0,
  }}>
    <Image
      source={{ uri: 'https://picsum.photos/200/300' }}
      style={{ width: 55, height: 55, marginHorizontal: 10 }}
    />
    <View>
      <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
        {item.title}
      </Text>
      <Text style={{ color: 'white', fontSize: 16 }}>
        {item.text}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({

});