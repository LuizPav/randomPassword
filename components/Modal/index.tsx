import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Clipboard from 'expo-clipboard';
import useStorage from '@/hooks/useStorage';

type modalPasswordProps = {
    password: string,
    closeModal: () => void
}

export function ModalPassword({ password, closeModal } : modalPasswordProps){

    const { saveItem } = useStorage();

        async function copyPassword(){
            await Clipboard.setStringAsync(password);
            await saveItem("@pass", password);
            closeModal();
        }


    return(
        <View style={styles.Modal}>
            <View style={styles.content}>

                    <Text style={styles.textoModal}>
                        Senha Gerada
                    </Text>

                <Pressable style={styles.senha} onLongPress={copyPassword}>
                    <Text style={styles.text}>
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.AreaBotoes}>
                    <TouchableOpacity style={styles.Botao} onPress={closeModal}>
                        <Text style={styles.ButtonText}>
                            Voltar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Botao} onPress={copyPassword}>
                        <Text style={styles.ButtonText}>Save Password</Text>
                    </TouchableOpacity>
                </View>

            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    Modal:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center', 
            backgroundColor: 'rgba(24, 24, 24, 0.6)',
    },

    textoModal:{
        fontSize: 28,
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
        marginTop: 'auto',
        marginBottom: 'auto',
    },

    content:{
        justifyContent: 'center',
        alignItems: 'center',   
        width: '85%',
        height: 300,
        borderRadius: 20,
        backgroundColor: '#F8F8FF',
    },
    senha:{
        backgroundColor: '#00000099',
        width: '85%',
        height: 50,
        marginBottom: 10,
        borderRadius: 8,
    },

    text:{
        textAlign: 'center',
        fontSize: 28,
        padding: 10,
        color: '#FFF'
    },

    AreaBotoes:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '60%',
        gap: 10
    },

    Botao:{
        backgroundColor: 'rgba(146, 4, 190, 1)',
        justifyContent: 'center',
        width: '50%',
        height: '30%',
        borderRadius: 6,
    },

    ButtonText:{
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },


})