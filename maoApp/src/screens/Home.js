import { Text, View, ScrollView, StyleSheet } from "react-native";
import { Nav } from '../components/nav';
import { NavTop } from '../components/navTop';
import { useNavigation, useRoute } from "@react-navigation/native";

export function Home() {
    const navigation = useNavigation();
    const route = useRoute();

    const categoriaAtual = route.params?.categoria;

    const pedidos = [
        { id: 1, pedido: 'Hatsune Miku', dataPed: '2026-05-14', nivel: 'Crítico', responsavel: 'Sophia', categoria: 'Crochê' },
        { id: 2, pedido: 'Blusa Borboleta', dataPed: '2026-05-20', nivel: 'Normal', responsavel: 'Gabrielly', categoria: 'Crochê' },
        { id: 3, pedido: 'Teste', dataPed: '2026-04-20', nivel: 'Sem Pressa', responsavel: 'Opa', categoria: 'Programação' },
    ];

    const pesosNivel = {
        'Crítico': 1,
        'Normal': 2,
        'Sem Pressa': 3
    };

    const pedidosFiltrados = categoriaAtual 
        ? pedidos.filter(ped => ped.categoria === categoriaAtual)
        : pedidos;

    const pedidosOrdenados = [...pedidosFiltrados].sort((a, b) => {
        if (pesosNivel[a.nivel] !== pesosNivel[b.nivel]) {
            return pesosNivel[a.nivel] - pesosNivel[b.nivel];
        }
        return new Date(a.dataPed) - new Date(b.dataPed);
    });

    return(
        <View className='flex-1 bg-branco dark:bg-preto-dark'>
            <ScrollView contentContainerStyle={{ padding: 10, paddingBottom: 110 }} className='flex'>
                <View className='px-[2%]'>
                    <NavTop titulo={'Home'}/>
                    <Text className='mt-[-35%] font-popRegular text-[16px] text-roxo underline'>
                        {categoriaAtual ? `Lista de ${categoriaAtual}` : 'Lista Completa'}
                    </Text>

                    <View className='w-full items-center mt-[2%]'>
                        {pedidosOrdenados.map((ped, index) => (
                            <View key={ped.id} className='flex-row items-center mt-[4%] bg-input px-6 py-2 w-full rounded-[20px]' style={[styles.sombra]}>
                                <Text className='font-popBold text-[18px] text-roxo'>{index + 1}</Text>
                                <View className='ml-[5%] w-[90%]'>
                                    <View className='flex-row justify-between w-full items-center'>
                                        <Text className='font-popRegular text-[16px]'>{ped.pedido}</Text>
                                        <Text className='font-popRegular text-[14px]' style={{
                                            color: ped.nivel == 'Crítico'
                                            ? '#A4000D'
                                            : ped.nivel == 'Normal'
                                            ? '#AC97CF'
                                            : ped.nivel == 'Sem Pressa'
                                            ? '#838383'
                                            : '#000'
                                        }}>{ped.nivel}</Text>
                                    </View>
                                    
                                    <View className='flex-row justify-between w-full items-center'>
                                        <Text className='font-popRegular text-[14px]'>{formataData(ped.dataPed)}</Text>
                                        <Text className='font-popRegular text-[14px] text-preto'>{ped.responsavel}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
            <Nav
                active="Home"
                onChange={(r) => navigation.navigate(r)} 
            />
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

function formataData(dataString) {
    const partes = dataString.split(' ');
    const data = partes[0];
    const [ano, mes, dia] = data.split('-');
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const mesFormatado = meses[parseInt(mes, 10) - 1];
    
    return `${dia} ${mesFormatado} ${ano}`;
}