import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCradContainer } from "./GameCradContainer";
import { GmaeQuery } from "../App";


interface Props {
  gameQuery: GmaeQuery
}

const GameGrid = ({ gameQuery}: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text color="red.500">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding="5px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCradContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCradContainer>
          ))}
        {data.map((game) => (
          <GameCradContainer key={game.id}>
            <GameCard game={game} />
          </GameCradContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
