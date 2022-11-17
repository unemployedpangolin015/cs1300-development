import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box, 
  Checkbox, 
  Stack
} from '@chakra-ui/react';

const Sidebar = (props) => {
  const [grassChecked, setGrassChecked] = useState(false);
  const [waterChecked, setWaterChecked] = useState(false);
  const [poisonChecked, setPoisonChecked] = useState(false);
  const [flyingChecked, setFlyingChecked] = useState(false);
  const [bugChecked, setBugChecked] = useState(false);
  const [fireChecked, setFireChecked] = useState(false);
  const [favoriteChecked, setFavoriteChecked] = useState(false);

  return (
    <Accordion defaultIndex={[0]} allowMultiple maxW='sm'>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Sort By
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stack>
            <Checkbox onChange={(e) => {
              e.preventDefault();
              props.onSelectSort('Name');
            }}>Name</Checkbox>
            <Checkbox onChange={(e) => {
              e.preventDefault();
              props.onSelectSort('Hp');
            }}>HP</Checkbox>
          </Stack>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Types
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        <Stack>
            <Checkbox onChange={(e) => {
              e.preventDefault();
              grassChecked ? props.onSelect('Grass', false) : props.onSelect('Grass', true)
              setGrassChecked(!grassChecked);
            }}>Grass</Checkbox>

            <Checkbox onChange={(e) => {
              e.preventDefault();
              poisonChecked ? props.onSelect('Poison', false) : props.onSelect('Poison', true)
              setPoisonChecked(!poisonChecked);
            }}>Poison</Checkbox>

            <Checkbox onChange={(e) => {
              e.preventDefault();
              waterChecked ? props.onSelect('Water', false) : props.onSelect('Water', true)
              setWaterChecked(!waterChecked);
            }}>Water</Checkbox>

            <Checkbox onChange={(e) => {
              e.preventDefault();
              flyingChecked ? props.onSelect('Flying', false) : props.onSelect('Flying', true)
              setFlyingChecked(!flyingChecked);
            }}>Flying</Checkbox>

            <Checkbox onChange={(e) => {
              e.preventDefault();
              bugChecked ? props.onSelect('Bug', false) : props.onSelect('Bug', true)
              setBugChecked(!bugChecked);
            }}>Bug</Checkbox>

            <Checkbox onChange={(e) => {
              e.preventDefault();
              fireChecked ? props.onSelect('Fire',false) : props.onSelect('Fire', true)
              setFireChecked(!fireChecked);
            }}>Fire</Checkbox>
          </Stack>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Favorites
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox onChange={(e) => {
            e.preventDefault();
            favoriteChecked ? props.onSelect('Favorite',false) : props.onSelect('Favorite', true)
            setFavoriteChecked(!favoriteChecked);
          }}>Favorites</Checkbox>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default Sidebar;