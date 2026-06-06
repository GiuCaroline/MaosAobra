import { View, Text, Pressable, StyleSheet } from "react-native";
import {
  House,
  PlusCircleIcon,
  ScrollIcon,
  User,
} from "phosphor-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";

export function Nav({ active, onChange }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[{ paddingBottom: insets.bottom > 0 ? insets.bottom : 8 }, styles.sombra]}
      className="absolute bottom-0 w-full bg-branco dark:bg-input-dark flex-row justify-around py-[3%] items-center"
    >
      <Tab
        label="Home"
        active={active === "Home"}
        onPress={() => onChange("Home")}
        icon={House}
      />

      <Tab
        label="Novo"
        active={active === "Novo"}
        onPress={() => onChange("Novo")}
        icon={PlusCircleIcon}
      />

      <Tab
        label="Meus Pedidos"
        active={active === "Pedidos"}
        onPress={() => onChange("Pedidos")}
        icon={ScrollIcon}
      />

      <Tab
        label="Perfil"
        active={active === "Perfil"}
        onPress={() => onChange("Perfil")}
        icon={User}
      />

    </View>
  );
}

function Tab({ label, icon: Icon, active, onPress }) {
  return (
    <Pressable className="items-center justify-center" onPress={onPress}>

      <Icon
        size={25}
        color={active ? "#AC97CF" : '#000'}
      />

      <Text className={`text-[11px] ${active ? "text-roxo" : "text-[#313131]"} dark:text-branco font-popRegular`}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    sombra: {
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 20,
    },
});