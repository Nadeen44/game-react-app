import { HStack, Image, List, ListItem, Skeleton, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  if (isLoading) {
    // Display skeleton loader while loading
    return (
      <List>
        {[...Array(20)].map((_, index) => (
          <ListItem key={index} paddingY={'5px'}>
            <HStack>
              <Skeleton  height={"32px"} width={"32px"} borderRadius={8} />
              <Skeleton  height={"20px"} width={"150px"} />
            </HStack>
          </ListItem>
        ))}
      </List>
    );
  }

  if (error) return null;

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image boxSize={"32px"} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
