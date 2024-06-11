import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "../src/hooks/useGenres"; // Ensure this is the correct path to your Genre type
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

export interface GmaeQuery {
  genre: Genre | null;
  platform: Platform | null;
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
        <PlatformSelector
          selectedPlatform={GameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...GameQuery, platform })
          }
        />
        <GameGrid gameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
