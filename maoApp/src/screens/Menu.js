import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { YarnIcon, CodeIcon } from 'phosphor-react-native';
import { useNavigation } from "@react-navigation/native";

export function Menu() {
    const navigation = useNavigation();

    return(
        <View className="flex-1 flex-row gap-4 items-center justify-center bg-branco dark:bg-preto-dark">
            <TouchableOpacity 
                className='bg-roxo h-[90%] items-center justify-center w-[45%] p-4 rounded-[30px]'
                style={[styles.sombra]}
                onPress={() => navigation.navigate('Home', { categoria: 'Crochê' })}
            >
                <YarnIcon size={35} weight='light' color='#FAFAFA' />
                <Text className='font-popRegular text-[14px] mb-[-3%] mt-[5%] text-branco'>O mundo do</Text>
                <Text className='font-popRegular text-[25px] text-branco'>Crochê</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                className='bg-input h-[90%] items-center justify-center w-[45%] p-4 rounded-[30px]'
                style={[styles.sombra]}
                onPress={() => navigation.navigate('Home', { categoria: 'Programação' })}
            >
                <CodeIcon size={35} weight='light' color='#AC97CF' />
                <Text className='font-popRegular text-[14px] mb-[-3%] mt-[5%]'>Os sistemas da</Text>
                <Text className='font-popRegular text-[21px] text-roxo'>Programação</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    sombra: {
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 6,
    },
});