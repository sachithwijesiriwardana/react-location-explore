import { View, Text, TouchableOpacity, Image, imageSrc } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const ItemCartContainer = ({ imageSrc, title, location }) => {
  return (
    <TouchableOpacity className="rounded-md border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2">
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-40 rounded-md object-cover "
      />
      <Text className="text-red text-[18px] font-bold">
        {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
      </Text>

      <View className="flex-row items-center space-x-1">
        <FontAwesome name="map-marker" size={20} color="black" />
        <Text className="text-red text-[18px] font-bold">
          {title?.length > 14 ? `${location.slice(0, 18)}..` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCartContainer;
