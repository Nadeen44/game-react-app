import { useState } from "react";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "../src/hooks/useGenres"; // Ensure this is the correct path to your Genre type
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import { SortSelector } from "./components/SortSelector";

export interface GmaeQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [GameQuery, setGameQuery] = useState<GmaeQuery>({} as GmaeQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      gap={4}
      p={4}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
            selectedGenre={GameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex  paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatform={GameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...GameQuery, platform })
              }
            />
            </Box>
            <SortSelector sortOrder={GameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...GameQuery, sortOrder })}/>
          
        </Flex>
        <GameGrid gameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
