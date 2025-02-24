import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import { ModalPassword } from '@/components/Modal'

let options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@."

export default function HomeScreen() {

  const [size, setSize] = useState(0);
  const [pass, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const gerarSenha = () => {
        
      let password = "";

      for(let i = 0, n = options.length; i<size; i++){

          password += options.charAt(Math.floor(Math.random() * n))

      }
      setPassword(password);
      setModalVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.texto}>
            Gerador de Senhas!
        </Text>
      </View>
        <View>
          <Image 
            style={styles.logo}
            source={require('@/assets/images/react-logo.png')}
          />
        </View>
        <View>
          <Text style={styles.texto}>
            Senha de no máximo 20 caracteres.
          </Text>
          <Text style={styles.texto2}>
            {size.toFixed(0)} Caracteres
          </Text>
        </View>
          <View style={styles.sliderArea}>
              <Slider 
              maximumTrackTintColor="#FF0000"
              minimumTrackTintColor="#005575"
              thumbTintColor='#F8F8FF'
              minimumValue={6}
              maximumValue={20}
              onValueChange={(value) => setSize(value)}
              />
          </View>
        <View>
          <TouchableOpacity style={styles.botao}
            onPress={gerarSenha}>
            <Text style={styles.textoBotao}>
              Gerar Senha
            </Text>
          </TouchableOpacity>
        </View>

        <Modal visible={modalVisible} animationType='fade' transparent={true}>
            <ModalPassword 
                password={pass}
                closeModal={() => setModalVisible(false)}
            />
        </Modal>

    </SafeAreaView>
  ) 
}
const styles = StyleSheet.create({
      texto:{
        color: '#FFFF',
        textAlign: 'center',
        fontSize: 25,
      },

      texto2:{
        marginTop: 20,
        color: '#FFFF',
        textAlign: 'center',
        fontSize: 25,
      },

      container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },

      logo:{
        marginBottom: 40,
        marginTop: 50,
        }, 

      sliderArea:{
        marginTop: 20,
        width: '80%',
        backgroundColor: '#33333334',
        borderRadius: 20,
        padding: 15,
      },

      botao:{
        marginTop: 20,
        height: 40,
        width: 100,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#33333334",

      },
      textoBotao:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
      }
})