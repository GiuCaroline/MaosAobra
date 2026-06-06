import { View, Text, KeyboardAvoidingView, ScrollView, Image, Platform, TouchableOpacity, Alert } from "react-native";
import { Input } from '../components/input';
import { useState } from "react";
import { GoogleLogoIcon, Eye, EyeSlash } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
export function Cadastro(){
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const navigation = useNavigation();


    const handleCadastro = () => {
    }

    return(  
        <View className="flex-1 items-center bg-branco dark:bg-preto-dark">
            <KeyboardAvoidingView 
                className="flex-1"
                behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            >
                <ScrollView contentContainerStyle={{ padding: 5, alignItems:'center', }} className='flex'>
                    <Image
                        source={require("../../assets/images/logoRoxa.png")}
                        className="w-[30%]"
                        resizeMode="contain"
                    />
                    <Text className="font-popSemibold text-[22px] text-preto dark:text-branco mt-[-35%] mb-[10%]">
                        Cadastro
                    </Text>

                    <View className='w-[350px] items-center'>
                        <Input 
                            texto={'Nome'} 
                            value={nome}
                            onChangeText={setNome}
                        />

                        <Input 
                            texto={'Email'} 
                            value={email}
                            onChangeText={(text) => setEmail(text.toLowerCase())}
                            keyboardType="email-address"
                        />
                        
                        <View className="w-full relative">
                            <Input 
                                texto={'Senha'} 
                                seguranca={!mostrarSenha}
                                onChangeText={setSenha}
                                value={senha}
                            />
                            <TouchableOpacity 
                                className="absolute right-5 top-[40px] z-10" 
                                onPress={() => setMostrarSenha(!mostrarSenha)}
                            >
                                {mostrarSenha ? (
                                    <Eye size={24} color='#000' />
                                ) : (
                                    <EyeSlash size={24} color='#000' />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity 
                        className="px-16 bg-roxo w-[70%] rounded-[15px] items-center justify-center mt-2 py-2"
                        onPress={handleCadastro}
                        activeOpacity={0.8}
                    >
                        <Text className="text-branco font-popRegular text-[18px]">
                        Cadastrar
                        </Text>
                    </TouchableOpacity>
                    
                    <Text className='font-popLight text-[13px] mt-[10%] text-preto dark:text-branco' onPress={() => navigation.navigate('Login')}>
                        Faça o login clicando <Text className='text-roxo' onPress={() => navigation.navigate('Login')}>aqui</Text>
                    </Text>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}