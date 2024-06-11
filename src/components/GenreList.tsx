import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from '../hooks/useGenres'; // Make sure to import the Genre type

export interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  if (isLoading) {
    return (
      <List>
        {[...Array(20)].map((_, index) => (
          <ListItem key={index} paddingY="5px">
            <HStack>
              <Skeleton height="32px" width="32px" borderRadius={8} />
              <Skeleton height="20px" width="150px" />
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
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontSize="sm"
              variant="link"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;