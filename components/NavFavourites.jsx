import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Via Paradiso 389",
  },
  {
    id: "323",
    icon: "briefcase",
    location: "work",
    destination: "Tesla headquarters, UK",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={()=> (
        <View 
        className='bg-gray-100 h-0.5'
        >



        </View>
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity className='flex-row items-center p-6'  >
          <Icon
          style={{
            marginRight: 12,
            borderRadius: 50,
            padding: 12,
            backgroundColor: "#232323"
          }}
          name={icon} type="ionicon" color="white" size={18} />
          <View>
            <Text className='text-lg font-semibold'>{location}</Text>
            <Text className='text-lg text-gray-500 font-semibold'>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
