import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const ItemScreen = ({route}) => {
    const navigation = useNavigation();

    const data = route?.params?.param;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
        <ScrollView className="flex-1 px-4 py-6">
            <View className="relative bg-white shadow-lg">
                {/* Main Image Banner */}
                <Image
                    source={{
                    uri: data?.photo?.images?.large?.url
                        ? data?.photo?.images?.large?.url
                        : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg",
                    }}
                    className="w-full h-72 object-cover rounded-2xl"
                />
                {/* Navigation Button set */}
                <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Discover")}
                        className="w-10 h-10 rounded-md items-center justify-center bg-white"
                    >
                        <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
                        <FontAwesome5 name="heartbeat" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
                    {/* items pricing and open or close set */}
                <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
                    <View className="flex-row space-x-2 items-center">
                        <Text className="text-[12px] font-bold text-gray-100">
                            {data?.price_level}
                        </Text>
                        <Text className="text-[32px] font-bold text-gray-100">
                            {data?.price}
                        </Text>
                    </View>

                    <View className="px-2 py-1 rounded-md bg-teal-100">
                        <Text>{data?.open_now_text}</Text>
                    </View>
                </View>
            </View>
            {/* Location for what need and search */}
            <View className="mt-6">
                <Text className="text-[#428288] text-[24px] font-bold">
                    {data?.name}
                </Text>
                <View className="flex-row items-center space-x-2 mt-2">
                    <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
                    <Text className="text-[#8C9EA6] text-[20px] font-bold">
                        {data?.location_string}
                    </Text>
                </View>
            </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default ItemScreen;