import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function NavTop({ titulo }){
  const navigation = useNavigation();

    return(
        <View className='mt-[-30%] justify-between flex-row items-center'>
            <View className='flex-row justify-between items-center w-full'>
                <Text className='font-popRegular text-[22px] text-preto dark:text-branco'>
                    {titulo}
                </Text>
                <Image
                    source={require("../../assets/images/logoRoxa.png")}
                    className="w-[30%]"
                    resizeMode="contain"
                />
            </View>
        </View>
    )
}
