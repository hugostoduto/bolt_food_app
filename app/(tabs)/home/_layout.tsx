import { Stack } from 'expo-router';
import React from 'react';

const Home = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'Home', headerShown: false }} />
    </Stack>
  );
};

export default Home;
