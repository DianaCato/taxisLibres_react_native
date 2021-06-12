import React,{useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import MapListScreen from './MapListScreen'

export default function Login(props) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.image}
      />
     <View style={styles.containerInputs}>
        <TextInput
          style={styles.input}
          onChangeText={(user) => setUser(user)}
          placeholder="Usuario"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          onChangeText={(password) => setPassword(password)}
          placeholder="Contraseña"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
const ELEMENT_WIDTH = width - 100;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#011B4E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  containerInputs: {
    marginTop: 100
  },
  input: {
    width: ELEMENT_WIDTH,
    fontSize: 16,
    height: 36,
    padding: 10,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    color: '#011B4E',
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#C7D945',
    width: 200,
    height: 60,
    marginLeft: 50,
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
});
