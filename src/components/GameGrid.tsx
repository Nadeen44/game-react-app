import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCradContainer } from "./GameCradContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding={"5px"}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCradContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCradContainer>
          ))}
        {games.map((game) => (
          <GameCradContainer>
            <GameCard key={game.id} game={game} />
          </GameCradContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
