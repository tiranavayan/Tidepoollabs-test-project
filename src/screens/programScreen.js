import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Header, ActivityItem, LoadMoreActivity } from 'src/components/program';
import { getActivities } from 'src/services/activitiesSvc';

const backgroundImage = require('src/assets/images/background.jpg');

const ProgramScreen = () => {
  const [activities, setActivities] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const upActivitiesCount = useCallback(() => {
    getActivities({ page, count: 10 }).then((response) => {
      setActivities((currentActivities) => [
        ...currentActivities,
        ...response.activities,
      ]);
      setPage((currentPage) => currentPage + 1);
      if (!total) {
        setTotal(response.total);
      }
    });
  }, [page, total]);

  useEffect(() => {
    upActivitiesCount();
  }, []);

  return (
    <View style={styles.appContainer}>
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
            data={activities}
            renderItem={ActivityItem}
            keyExtractor={(item) => `${item.id} ${item.title}`}
            ListHeaderComponent={Header}
            ListFooterComponent={() => (
              <LoadMoreActivity
                showMore={activities.length < total}
                onPress={upActivitiesCount}
              />
            )}
          />
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
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
