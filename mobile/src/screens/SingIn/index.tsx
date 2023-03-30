import { Image, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logoImg from "../../assets/logo-nlw-esports.png";
import * as AuthSession from 'expo-auth-session';


import { Heading } from "../../components/Heading";
import { Background } from "../../components/Background";

import { styles } from "./styles";
import { GameController } from "phosphor-react-native";
import { THEME } from "../../theme";

export function SingIn() {
  
  async function handleDiscordSingIn(){
    
    const response = await AuthSession.startAsync({
      authUrl: "https://discord.com/api/oauth2/authorize?client_id=1022292503187161131&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40schmvitor%2Fmobilenlw&response_type=code&scope=identify"
    });
    
    fetch('https://discord.com/api/users/@me', {
      headers: {
        'authorization': `Bearer ${response.params.access_token}`
      }
    })
      .then(response => response.json())
      .then(data => console.log(data));
      
    console.log(response);
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        
        <TouchableOpacity 
          style={styles.button}
          onPress={handleDiscordSingIn}
        >
          <GameController 
            color={THEME.COLORS.TEXT} 
            size={20}
          />
          <Text style={styles.buttonTitle}>
            Entrar com Discord!
          </Text>
        </TouchableOpacity>

      </SafeAreaView>
    </Background>
  );
}
