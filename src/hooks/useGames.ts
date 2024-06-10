// hooks/useGames.ts
import useData from "./useData";

export interface Platform {
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


const useGames = () => useData<Game>('/games')
   


export default useGames;
