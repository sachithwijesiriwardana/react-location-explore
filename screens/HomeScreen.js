import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row px-6 mt-6 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-green-300 text-3xl">Go</Text>
        </View>

        <Text className="text-black-400 text-3xl">Travel</Text>
      </View>

      {/*Second Section*/}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-blue-500 text-4xl">Enjoy the trip</Text>
        <Text className="text-green-700 text-3xl font-semibold">
          Good moments
        </Text>
        <Text className="text-lg text-blue-300 text-base">
          Allowing users to search and book flights, compare prices, and find
          locations
        </Text>
      </View>
      <View className="w-[400px] h-[400px] bg-violet-500 rounded-full absolute bottom-20 -right-60 "></View>
      <View className="w-[400px] h-[400px] bg-teal-300 rounded-full absolute  -bottom-28 -left-36"></View>
      <View className="flex-1 items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />

        
          <TouchableOpacity 
          onPress={() => navigation.navigate("Discover")}
         
          className="absolute bottom-20 w-24 h-24 border-r-2 border-l-2 border-t-4 border-green-300 rounded-full justify-center items-center">
            <Animatable.View
              animation="pulse"
              easing={"ease-in-out"}
              iterationCount={"infinite"}
              className="w-20 h-20 items-center justify-center rounded-full bg-green-500 "
            >
              <Text className="text-4xl text-white font-semibold">Go</Text>
            </Animatable.View>
          </TouchableOpacity>
       
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
