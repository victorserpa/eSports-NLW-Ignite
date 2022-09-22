import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { useEffect, useState } from "react";
import { SwiperProps, SwiperSlide } from "swiper/react";
import { CreateAdBanner } from "./CreateAdBanner";
import { CreateAdModal } from "./CreateAdModal";

import Slider from "./Slider/Slider";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function MoviRow() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) => {
      setGames(response.data);
    });
  }, []);

  const settings: SwiperProps = {
    spaceBetween: 0,
    slidesPerView: games.length < 3 ? games.length : 4,
    navigation: games.length >= 4,
    draggable: games.length >= 4,
    loop: games.length >= 4,
  };

  return (
    <div className="max-w-[1344px] mx-auto">
      <div className="flex overflow-x-auto snap-mandatory mt-10">
        <Slider settings={settings}>
          {games.map((game) => {
            return (
              <SwiperSlide>
                <div
                  className="max-h-screen w-max flex-none "
                  id="item"
                  key={game.id}
                >
                  <div
                    className="relative rounded-lg overflow-hidden  hover:shadow-transparent transition-all"
                    id="image"
                  >
                    <img src={game.bannerUrl} alt="jogo" />
                    <div
                      className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0"
                      id="info"
                    >
                      <span className="font-bold text-white block" id="name">
                        {game.title}
                      </span>
                      <span
                        className="text-zinc-300 text-sm block"
                        id="qntAnuncio"
                      >
                        {game._count.ads}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Slider>
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}
