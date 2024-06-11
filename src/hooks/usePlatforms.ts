import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents'); // Make sure to fetch an array of platforms

export default usePlatforms; // Export the hook function, not the interface
