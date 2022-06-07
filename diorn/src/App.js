import React from "react";
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, Linking} from "react-native";
import DisplayMode from "react-native/Libraries/ReactNative/DisplayMode";

const colorGithub = '#010409'
const colorFonts = '#C9D1D9'
const colorButton = '#4F565E'

const imagemGithub = 'https://avatars.githubusercontent.com/u/90220756?s=400&u=4ff4b98ba4d168e2227a33af2fb6577e63de6d81&v=4'

const urlGithub = 'https://github.com/lucascerk'

const urlLinkedin = 'https://www.linkedin.com/in/lucas-cerca-a0741276/'

const App = () => {

    const handlePressToGithub = async () => {
        console.log('Verificando link.')
        const res = await Linking.canOpenURL(urlGithub);
        if(res) {
            console.log('Link aprovado.')
            console.log('Abrindo link...')
            await Linking.openURL(urlGithub);
        }
    }

    const handlePressToLinkedin = async () => {
        console.log('Verificando link.')
        const res = await Linking.canOpenURL(urlLinkedin);
        if(res) {
            console.log('Link aprovado.')
            console.log('Abrindo link...')
            await Linking.openURL(urlLinkedin);
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle={'light-content'}></StatusBar>
            <View style={style.content}>
                <Image 
                accessibilityLabel="Foto do Lucas com fundo de paisagem"
                style={style.avatar} 
                source={{uri: imagemGithub}}>
                </Image>
                <Text accessibilityLabel="Nome Lucas Cerca" style={[style.Text, style.name]}>Lucas Cerca</Text>
                <Text accessibilityLabel="Instagram lucascerk" style={[style.Text, style.TextSocial2, style.TextSocial]}>@lucascerk</Text>
                <Text accessibilityLabel="Habilidades e conhecimentos em HTML e CSS, javascript, react native, python, c# .NET. Desenvolvedor" style={style.TextJobs}>HTML e CSS | Javascript | React Native | Python | C# .NET -- Desenvolvedor</Text>
            </View>
            <Pressable onPress={handlePressToGithub}>
                <View style={style.button}>
                    <Text style={[style.Text, style.backButton]}>Abrir no Github</Text>
                </View>
            </Pressable>
                <View style={style.content}>
                    <Text style={style.Text}>───────── ou ───────── </Text>
                </View>
                <Pressable onPress={handlePressToLinkedin}>
                <View style={style.button}>
                    <Text style={[style.Text, style.backButton]}>Abrir no LinkedIn</Text>
                </View>
            </Pressable>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({

    container: {
        backgroundColor: colorGithub,
        flex: 1, //expandir para a tela inteira
        justifyContent: 'center',
        alignItems: "center",
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'white',
    },

    Text: {
        color: 'white',
    },

    name: {
        marginTop: 20,
        fontSize: 34,
        fontWeight: 'bold',
    },

    TextJobs: {
        marginTop: 10,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },

    TextSocial: {
        textDecorationLine: "underline",
    },

    TextSocial2: {
        fontSize: 18,
        color: colorFonts,
    },

    button: {
        marginTop: 10,
        backgroundColor: colorButton,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
    },

    backButton: {
        fontWeight: "bold",
        fontSize: 16,
        padding: 10,
    },

});