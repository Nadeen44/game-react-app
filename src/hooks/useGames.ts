// hooks/useGames.ts
import { GmaeQuery } from "../App";
import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface ParentPlatform {
  platform: Platform;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: ParentPlatform[];
  metacritic: number;
}

const useGames = (gameQuery: GmaeQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );

export default useGames;
