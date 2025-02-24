import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native'
import useStorage from '@/hooks/useStorage';

import { PasswordItem } from '@/components/Passwords';

export default function TabTwoScreen() {

    const [listPassword, setListPasswords] = useState([]);
    const focus = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
      async function loadPasswords(){
          const passwords = await getItem("@pass");
          setListPasswords(typeof passwords === 'string' ? JSON.parse(passwords) : passwords);
      }
      loadPasswords();
    }, [focus])

    async function deletePassword(item : string){
      const password = await removeItem("@pass", item);
      setListPasswords(password);
    }


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.texto}>Minhas senhas</Text>
        </View>

        <View style={styles.content}>
            <FlatList 
              style={{paddingTop: 10, flex: 1}}
              data={listPassword}
              keyExtractor={(item) => String(item)}
              renderItem={({ item }) => <PasswordItem  data={item} removePassword={() => deletePassword(item)}/>}
            />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

  header:{
    backgroundColor: 'rgba(146, 4, 190, 0.88)',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },

  texto:{
    fontSize: 28,
    textAlign: 'center',
    color: '#FFF'
  },

  content:{
    flex: 1,
  },
});
