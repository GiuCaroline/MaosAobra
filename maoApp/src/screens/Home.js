import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Nav } from '../components/nav';
import { NavTop } from '../components/navTop';

export function Home() {
    return(
        <View className='flex-1 bg-branco dark:bg-preto-dark'>
            <ScrollView contentContainerStyle={{ padding: 10, paddingBottom: 110 }} className='flex'>
                <NavTop titulo={'Home'}/>
                <Text className='mt-[-40%]'>oisisisisi</Text>
            </ScrollView>
            <Nav
                active="Home"
                onChange={(r) => navigation.navigate(r)} 
            />
        </View>
    )
}