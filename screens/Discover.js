import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Hotels, Attractions, Restaurants } from "../assets";
import MenuContainer from "../components/MenuContainer";

import { FontAwesome } from "@expo/vector-icons";
import ItemCartContainer from "../components/ItemCartContainer";

const Discover = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("restaurants");

  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setmainData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-3xl text-green-700 font-bold">Discover</Text>
          <Text className="text-green-400 text-3xl">the beauty today</Text>
        </View>

        <View className="w-12 h-12 bg-gray-500 rounded-md items-center justify-center">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
      <View className="flex-row items-center bg-white mx-4 py-1 rounded-xl px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "",
            language: "en",
          }}
        />
      </View>
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-8 ">
            <MenuContainer
              key={"hotel"}
              title="Hotels"
              ImageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              ImageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              ImageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-green-500 text-[28px] font-bold">
              Top Tips
            </Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
              <Text className="text-emerald-400 text-[28px] font-bold">
                Explore
              </Text>
              <FontAwesome name="long-arrow-right" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View className="px-4 mt- flex-row items-center justify-evenly flex-wrap">
       
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
