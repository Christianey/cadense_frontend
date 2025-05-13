import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View className="bg-red-500">
        <Text className="text-white">Hello world</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
