import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card >
      <Skeleton height={"250px"}></Skeleton>
      <CardBody>
        <SkeletonText/>
      </CardBody>
    </Card>
  );
};
