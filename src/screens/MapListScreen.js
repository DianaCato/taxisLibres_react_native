import React, { useState } from 'react'
import { SafeAreaView } from 'react-navigation'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

function MapListScreen({ navigation }) {
    const [key, setKey] = useState('');

    const makeid = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        setKey(result);
    }

    return (
        <View>
            <SafeAreaView forceInset={{ top: 'always' }}>
                <Text style={{ fontSize: 50, padding: 15 }}>Crear código</Text>
            </SafeAreaView>
            <TouchableOpacity style={styles.button} onPress = {() => makeid(6)} >
                <Text style={styles.buttonText}>Click</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, padding: 30 }}>Este código tiene una vigencia de 24 horas, recuerda que si es canjeado obtentras mayores beneficios.</Text>
            <Text style={{fontSize: 30, color:'#672C91', marginLeft:15}}>Código TipCap : {key}</Text> 
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#C7D945',
        width: 200,
        height: 60,
        marginLeft: 70,
        marginTop: 40,
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 10
      },
      buttonText: {
        color: '#672C91',
        fontWeight: '500',
        fontSize: 18,
        padding: 5,
      }
})

export default MapListScreen