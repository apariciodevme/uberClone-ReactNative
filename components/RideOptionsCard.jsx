import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber Lux",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView className="flex-grow bg-white ">
      <View className="">
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          className="absolute z-10 p-3 rounded-full top-3 left-5"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="py-5 text-2xl text-center">Select a Ride</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, image, title, multiplier }, item }) => (
          <TouchableOpacity onPress={() => setSelected(item)}
           className={`flex-row items-center justify-between px-6  ${id === selected?.id && 'bg-gray-200'} `}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View className='flex-1'>
              <Text className="text-lg font-semibold">{title}</Text>
              <Text className="text-sm ">Travel time</Text>
            </View>
            <View>
            <Text className='text-xl font-semibold '>$20</Text>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
