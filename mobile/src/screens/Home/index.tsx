import { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logoImg from "../../assets/logo-nlw-esports.png";
import { useNavigation } from "@react-navigation/native";

import { GameCard, GameCardProps } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { Background } from "../../components/Background";

import { styles } from "./style";
import { SingIn } from "../SingIn";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigativon = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigativon.navigate("game", { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch("http://192.168.3.198:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  });

  return (
    <Background>
      <SafeAreaView>
        <SingIn />
      </SafeAreaView>
    </Background>
    // <Background>

    //   <SafeAreaView style={styles.container}>
    //     <Image source={logoImg} style={styles.logo} />

    //     <Heading
    //       title="Encontre seu duo!"
    //       subtitle="Selecione o game que deseja jogar..."
    //     />

    //     {/* <FlatList
    //       data={games}
    //       keyExtractor={(item) => item.id}
    //       renderItem={({ item }) => (
    //         <GameCard
    //         data={item}
    //         onPress={() => handleOpenGame(item)}
    //         />
    //       )}
    //       showsHorizontalScrollIndicator={false}
    //       horizontal
    //       contentContainerStyle={styles.contentList}
    //     /> */}
    //   </SafeAreaView>
    // </Background>
  );
}
