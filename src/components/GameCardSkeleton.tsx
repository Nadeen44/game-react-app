import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card width={"350px"} borderRadius={"10px"} overflow={'hidden'}>
      <Skeleton height={"250px"}></Skeleton>
      <CardBody>
        <SkeletonText/>
      </CardBody>
    </Card>
  );
};
