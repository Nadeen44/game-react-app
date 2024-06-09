// components/PlatformIconList.tsx
import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const platformIcons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo:SiNintendo,
    web:BsGlobe,
  };

  return (
    <HStack marginY={'10px'}>
      {platforms.map((platform) => (
        <Icon opacity={0.3} key={platform.id} as={platformIcons[platform.slug] } />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
