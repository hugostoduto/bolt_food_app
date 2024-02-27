/* eslint-disable prettier/prettier */
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';




const MarketCart = ({ restaurantData }) => {
  const ratingStyle = {
    color: restaurantData.rating < 4.5 ? 'black' : '#FF8C00'
  }
  return (
    <Link href={{ pathname: `${restaurantData.id}`, params: { id: restaurantData.id } }} asChild>
      <Pressable className={styles.cardContainer}>
        <View>
          <Image resizeMode='cover' className={styles.cardImage} source={{ uri: restaurantData.profileImage }} />
          <View className={styles.overlay}>
            <Text className={styles.overlayText}>
              {restaurantData.delivery} min
            </Text>
          </View>
        </View>
        <View className={styles.textsContainer}>
          <Text className={styles.restaurantName}>
            {restaurantData.name}
          </Text>
          <View className={styles.ratingContainer}>
            <FontAwesome name='star' size={17} color={ratingStyle.color} />
            <Text className={styles.rating}>
              {restaurantData.rating}
            </Text>
          </View>
        </View>
        <Text className={styles.price}>$ {restaurantData.price}</Text>
      </Pressable>
    </Link>
  )
};
const styles = {
  cardContainer: 'm-5',
  cardImage: 'w-full h-[180px] rounded-md',
  overlay: 'absolute bg-white rounded-sm bottom-2 right-2',
  overlayText: 'text-sm dont-semibold py-1 px-2',
  textsContainer: 'flex flex-row items-center justify-between',
  restaurantName: 'text-base font-bold mt-2 text-[#2e303d]',
  ratingContainer: 'flex flex-row items-center',
  rating: 'ml-1 font-bold text-base',
  price: 'text-sm font-[#6e6d72]',
};

export default MarketCart;
