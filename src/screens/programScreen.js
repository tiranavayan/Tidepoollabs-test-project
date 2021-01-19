import React, { useEffect, useState, useCallback } from 'react';
import { ImageBackground, StyleSheet, FlatList } from 'react-native';

import { Header, ActivityItem, LoadMoreActivity } from 'src/components/program';
import { AppContainer } from 'src/components/app';

import { getActivities } from 'src/services/activitiesSvc';

const backgroundImage = require('src/assets/images/background.jpg');

const ProgramScreen = () => {
  const [activities, setActivities] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const upActivitiesCount = useCallback(() => {
    if (!total || activities.length < total) {
      setLoading(true);
      getActivities({ page, count: 10 }).then((response) => {
        setActivities((currentActivities) => [
          ...currentActivities,
          ...response.activities,
        ]);
        setPage((currentPage) => currentPage + 1);
        if (!total) {
          setTotal(response.total);
        }
        setLoading(false);
      });
    }
  }, [page, total, activities]);

  useEffect(() => {
    upActivitiesCount();
  }, []);

  return (
    <AppContainer>
      <ImageBackground
        source={backgroundImage}
        style={styles.container}
        imageStyle={{ resizeMode: 'cover' }}>
        <FlatList
          data={activities}
          renderItem={ActivityItem}
          keyExtractor={(item) => `${item.id} ${item.title}`}
          ListHeaderComponent={Header}
          ListFooterComponent={() => <LoadMoreActivity show={loading} />}
          ListEmptyComponent={() => <LoadMoreActivity show={true} />}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (!loading) {
              upActivitiesCount();
            }
          }}
        />
      </ImageBackground>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProgramScreen;
