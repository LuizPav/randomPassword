import { View, Text, StyleSheet, Pressable } from "react-native";

type PasswordItemProps = {
    data: string;
    removePassword: () => void;
}

export function PasswordItem({data, removePassword} : PasswordItemProps){
    return (
        <View style={styles.container}>
            <Pressable onLongPress={removePassword} style={styles.item}>
                <Text  style={{color:'#FFF', fontSize: 28, marginLeft: 20}}>{data}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item:{
        backgroundColor: '#333',
        width: '90%',
        padding: 14,
        borderRadius: 8,
        marginBottom: 10,
        justifyContent: 'center'
    },
})