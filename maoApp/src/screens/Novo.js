import { Text, View, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Nav } from '../components/nav';
import { NavTop } from '../components/navTop';

export function Novo(){
    const navigation = useNavigation();

    return(
        <View className='flex-1 bg-branco dark:bg-preto-dark'>
            <ScrollView contentContainerStyle={{ padding: 10, paddingBottom: 110 }} className='flex'>
                <NavTop titulo={'Novo Pedido'}/>
            </ScrollView>
            <Nav
                active="Novo"
                onChange={(r) => navigation.navigate(r)} 
            />
        </View>
    )
} 