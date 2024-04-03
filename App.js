import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>FRIENDLAY!</Text>
      <Text style={styles.subTitle}>USUARIO</Text>
      <Text style={styles.subTitle}>CONTRASEÑA</Text>
      <TextInput
        placeholder='correoElectronico@gmail.com'
        style={styles.textInput}
        />
      <TextInput
        placeholder='pasword'
        style={styles.textInput}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
    padding: 10,
  },
  textInput: {
    padding: 10,
    paddingStart: 10,
    width: '80%',
    height: 60,
    marginTop: 120,
    borderRadius: 30,
  },
});
