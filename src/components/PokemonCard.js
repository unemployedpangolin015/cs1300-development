import React, { useState } from 'react';

import {
  Card,
  CardBody,
  Stack,
  CardFooter,
  Heading,
  Text,
  Divider,
  Button,
  Image,
  HStack,
  Tag,
  TagLabel,
  TagRightIcon
} from '@chakra-ui/react';

import { RiLeafLine, RiFireLine } from 'react-icons/ri';
import { GiPoisonBottle, GiHummingbird } from 'react-icons/gi';
import { BsBug } from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';

const PokemonCard = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const getIcons = (type1, type2) => {
    const icons = [];

    if (type1 === 'Grass' || type2 === 'Grass') {
      icons.push([RiLeafLine, 'Grass', 'green']);
    }

    if (type1 === 'Poison' || type2 === 'Poison') {
      icons.push([GiPoisonBottle, 'Poison', 'purple']);
    }

    if (type1 === 'Water' || type2 === 'Water') {
      icons.push([IoWaterOutline, 'Water', 'blue']);
    }

    if (type1 === 'Flying' || type2 === 'Flying') {
      icons.push([GiHummingbird, 'Flying', 'teal']);
    }

    if (type1 === 'Bug' || type2 === 'Bug') {
      icons.push([BsBug, 'Bug', 'orange']);
    }

    if (type1 === 'Fire' || type2 === 'Fire') {
      icons.push([RiFireLine, 'Fire', 'red']);
    }

    return icons;
  }

  return <Card maxW='sm'>
    <CardBody>
      <Image
        src={props.src}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <HStack spacing={4}>
          {
            getIcons(props.type1, props.type2).map((item, index) => (
              <Tag size={'lg'} key={index} variant='outline' colorScheme={item[2]}>
                <TagLabel>{item[1]}</TagLabel>
                <TagRightIcon as={item[0]} />
              </Tag>
            ))}
        </HStack>
        <Heading size="lg">{props.name}</Heading>
        <Text>HP: {props.total}</Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <Button variant={!isFavorite ? 'solid' : 'outline'} colorScheme='blue' onClick={() => 
        {
          setIsFavorite(!isFavorite)
          props.onClick([props.name, props.total], !isFavorite);
        }}>{ !isFavorite ? 'Add to Favorites' : 'Remove from Favorites' }</Button>
    </CardFooter>
  </Card>
}

export default PokemonCard;