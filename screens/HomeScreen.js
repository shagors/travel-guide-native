import { View, Text, SafeAreaView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown : false,

        });
    }, [])

  return (
    <SafeAreaView className="bg-white flex-1 relative">
        {/* first section */}

        <View className="flex-row px-6 mt-8 space-x-2">
            <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
            </View>
            <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
        </View>

        {/* Second section */}

        <View className="px-6 mt-8 space-y-3">
            <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
            <Text className="text-[#00BCC9] text-[38px] font-bold">Goods Moments</Text>

            <Text className="text-[#3C6072] text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio
                quis nostrum
            </Text>
        </View>

        {/* circle Section */}

        <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
        <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>

        {/* Image container */}

    </SafeAreaView>
  )
}

export default HomeScreen;