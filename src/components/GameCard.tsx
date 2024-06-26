// components/GameCard.tsx
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "../components/PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";


 interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={ getCroppedImageUrl (game.background_image)} alt={`${game.name} background`} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent='space-between'>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
         <CriticScore score={game.metacritic} /> {/* Corrected property name */}
         </HStack>
      </CardBody>
    </Card>
  );
};
