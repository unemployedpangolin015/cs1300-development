import React, { useState } from 'react';

import { Heading, ChakraProvider, Grid, GridItem, SimpleGrid, Box, Center, Text } from '@chakra-ui/react';

import PokemonCard from './components/PokemonCard';
import Sidebar from './components/Sidebar';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [totalHp, setTotalHp] = useState(0);
  const [type, setType] = useState([]);
  const [sortName, setSortName] = useState(false);
  const [sortHp, setSortHp] = useState(false);

  const data = [
    { name: 'Bulbasaur', type1: 'Grass', type2: 'Poison', total: 318 },
    { name: 'Ivysaur', type1: 'Grass', type2: 'Poison', total: 405 },
    { name: 'Venusaur', type1: 'Grass', type2: 'Poison', total: 525 },
    { name: 'Charmander', type1: 'Fire', type2: '', total: 309 },
    { name: 'Charmeleon', type1: 'Fire', type2: '', total: 405 },
    { name: 'Charizard', type1: 'Fire', type2: 'Flying', total: 534 },
    { name: 'Squirtle', type1: 'Water', type2: '', total: 314 },
    { name: 'Wartortle', type1: 'Water', type2: '', total: 405 },
    { name: 'Blastoise', type1: 'Water', type2: '', total: 530 },
    { name: 'Caterpie', type1: 'Bug', type2: '', total: 195 },
    { name: 'Metapod', type1: 'Bug', type2: '', total: 205 },
    { name: 'Butterfree', type1: 'Bug', type2: 'Flying', total: 395 }
  ]

  const addToFavorites = (item, add) => {
    if (add) {
      if (!favorites.includes(item)) {
        setFavorites([...favorites, item[0]]);
        setTotalHp(totalHp + item[1]);
      }
    } else {
      var array = [...favorites];
      var index = array.indexOf(item[0]);
      if (index !== -1) {
        array.splice(index, 1);
        setFavorites(array);
        setTotalHp(totalHp - item[1]);
      }
    }
  }

  const selectFilterType = (eventKey, add) => {
    if (add) {
      setType([...type, eventKey]);
    } else {
      var array = [...type];
      var index = array.indexOf(eventKey);
      if (index !== -1) {
        array.splice(index, 1);
        setType(array);
      }
    }
  }

  const matchesFilterType = (item) => {
    if (type === []) {
      return true;
    } else {
      for (let i = 0; i < type.length; i++) {
        if (type[i] === 'Favorite') {
          if (!favorites.includes(item.name)) {
            return false;
          }
        } else if (item.type1 !== type[i] && item.type2 !== type[i]) {
          return false;
        }
      }
    }

    return true;
  }

  const filteredData = data.filter(matchesFilterType);
  const selectSortType = (sort) => {

    if (sort === 'Name') {
      setSortName(!sortName);
    } else {
      setSortHp(!sortHp);
    }
  }

  let sortedData = filteredData.sort((a, b) => {
    if (sortName && sortHp) {
      const diff = a.name.localeCompare(b.name);

      if (diff === 0) {
        return a.total - b.total;
      }

      return diff;
    } else if (sortName) {
      return a.name.localeCompare(b.name);
    } else if (sortHp) {
      return a.total - b.total;
    } else {
      return 0;
    }
  })

  return (
    <ChakraProvider>
      <Center>
        <Heading as='h1' size='4xl' py={4}>Pokedex</Heading>
      </Center>

      <Grid templateColumns='repeat(5, 1fr)' templateRows='repeat(1, 1fr)' px={5}>
        <GridItem colSpan={1}>
          <Heading as='h2' size='md' py={4}>Sort and Filter</Heading>
          <Sidebar
            onSelect={selectFilterType}
            onSelectSort={selectSortType}
          />
          <Box>
            <Heading as='h2' size='md' py={4}>Favorites</Heading>
            {favorites.map((item, idx) =>
              <Box key={idx}>
                {item}
              </Box>)}
            <Heading as='h3' size='sm' py={4}>Total HP: {totalHp}</Heading>
          </Box>
        </GridItem>
        <GridItem colSpan={4}>
          <Center>
            <SimpleGrid
              columns={[2, null, 2, null, 4]}
              spacing={4}
            >
              {sortedData.map((item, idx) =>
                <Box key={idx}>
                  <PokemonCard
                    name={item.name}
                    type1={item.type1}
                    type2={item.type2}
                    total={item.total}
                    src={`${item.name.toLowerCase()}.png`}
                    onClick={addToFavorites}
                  />
                </Box>)}
            </SimpleGrid>
          </Center>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
