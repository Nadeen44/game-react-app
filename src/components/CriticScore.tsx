import { Badge } from '@chakra-ui/react';

 interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  // Determine badge color based on score
  const colorScheme = score >= 75 ? 'green' : score >= 50 ? 'yellow' : 'red';

  return (
    <Badge colorScheme={colorScheme} fontSize="14px" padding="0.2em 0.4em" borderRadius="0.25em" >
      {score}
    </Badge>
  );
}

export default CriticScore;
