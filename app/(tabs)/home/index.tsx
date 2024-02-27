/* eslint-disable prettier/prettier */
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { dummyRestaurantsData } from '~/assets/data/restaurantsData';
import MarketCart from '~/components/MarketCart';

const HomeScreen = () => {
  return (
    <SafeAreaView className={styles.container}>
      <View className={styles.header}>
        <View className={styles.addressContainer}>
          <MaterialCommunityIcons name="map-marker-outline" size={28} color="black" />
          <Text className={styles.addressText}>Your address</Text>
        </View>
      </View>
      <FlatList data={dummyRestaurantsData} showsVerticalScrollIndicator={false} keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <Text className={styles.cardTitle}>All Restaurants And Stores</Text>
        )}
        renderItem={(({ item }) => <MarketCart restaurantData={item} />)}
      />

    </SafeAreaView>
  );
};
const styles = {
  container: 'flex-1 p-4 mt-6  bg-white',
  header: 'flex-row justify-between',
  addressContainer: 'flex-row items-center p-5',
  addressText: 'ml-2',
  cardTitle: 'mt-4 mb-2 ml-6 text-lg font-bold',
};
export default HomeScreen;
