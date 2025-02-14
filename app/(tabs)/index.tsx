import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
export default function HomeScreen() {
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
        </View>
        <View style={styles.sliderArea}>
            <Slider 
            maximumTrackTintColor="#FF0000"
            minimumTrackTintColor="#005575"
            thumbTintColor='#F8F8FF'
            minimumValue={6}
            maximumValue={20}
            />
        </View>

    </SafeAreaView>
  ) 
}
const styles = StyleSheet.create({
      texto:{
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
        borderRadius: 6,
        padding: 15,
      },
})