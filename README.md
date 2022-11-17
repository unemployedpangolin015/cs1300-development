# Development

### Link to Deployed Website
https://unemployedpangolin015.github.io/cs1300-development/

### Goal and Value of the Application
The goal of the application is to allow users to browse various Pokemon, learn about their types and HP, and favorite Pokemon that they are interested in. Users can filter Pokemon by type and sort the Pokemon alphabetically and by HP. Users can also view the Pokemon they have favorited, and view the sum of the total HP. 

The value of this application is that it allows users interested in Pokemon to learn more each Pokemon's stats and save the Pokemon they are interested in. 

### Usability Principles Considered
#### Layout
I tried to make the layout similar to commonly used online shopping interfaces, so that it fits with the user's mental model. Consequently, I created a side bar that allows users to sort and filter, as well as view the favorites. 

#### Hierarchy
I created cards for each Pokemon in a grid layout. Because users are visuals, I put the image first on the card and made it large. I bolded the Pokemon name and made it the largest text on the card so that the users know it is important information. I put the different types that the Pokemon had in badges on the card, color coded the types, and added an icon for each type. I also put the "Add to Favorites" button on the bottom and put it in a bright blue color, so users know it should be clicked. 

### Organization of Components

#### App
This is the top level component. It contains a heading, the sidebar, and a grid of cards. 

#### Sidebar
The sidebar is used to select filters and sort keys, as well as display the user's favorites. 

#### PokemonCard
The PokemonCard is used to represent each pokemon. It displays an image, the type(s), the name, the HP, and has a button for adding to Favorites. 

### How Data is Passed Down Through Components
#### App
This is the top level component. It has state for: 
- `favorites`: a list of the user's favorites
- `totalHp`: the sum of the HP of the Pokemon in the user's favorites
- `type`: a list of the filters by type and/or favorites that the user has selected
- `sortName`: a boolean representing if the cards should be sorted by name
- `sortHp`: a boolean representing if the cards should be sorted by Hp

These state variables control what cards show up on the grid of cards by doing sorting or filtering after user specification. 

These state variables are changed through functions like `addToFavorites`, `selectSortType`, and `selectFilterType`. These functions are passed into the `Sidebar` and `PokemonCard` components. 

#### Sidebar
The sidebar has state for whether the checkboxes are checked or not for the types checkboxes and the favorites checkboxes. It takes in two functions as props. The first function (`selectFilterType`) selects the filter type, and the second function (`selectSortType`) selects the sort type. These two functions are called when the checkbox is checked or unchecked, and will modify state in App through these functions. 

#### PokemonCard
The PokemonCard has state for whether the card is a favorite. The PokemonCard
component takes in a function as a prop, `addToFavorites`. When the button is clicked, the function is called so that the pokemon can be added to `favorites` in App. 

### How the User Triggers State Changes

#### Sidebar
When the user checks one of the sort boxes in the sidebar, `onChange` triggers a series of function calls. It calls `onSelectSort / selectSortType` and passes in what the sort key is. Then, `selectSortType` changes the `sortName` or `sortHp` state boolean to the opposite of what it currently is. Then, due to the change in state, the grid data that shows up is different because it gets resorted or unsorted. 

When the user checks the favorites or types box in the sidebar, `onChange` triggers a series of function calls. It checks whether the state for that specific checkbox is true or not (e.g. whether the box is already checked or not). Then, it calls `onSelect / selectFilterType`, passes in the filter, and whether the filter should be added or removed. Then, it modifies the state for that checkbox itself (e.g. `favoriteChecked` for if the favorites checkbox is checked or not). Then, due to the change in state, the grid data that shows up is different because filters are added and/or removed. 

### Pokemon Card
When the user clicks the "Add to Favorites" button, `onClick` triggers a series of function calls. First, it modifies the PokemonCard's state for if it is a favorite or not (`isFavorite`). Then, it calls `onClick / addToFavorites`, which either adds or removes the pokemon to `favorites` in App, depending on if it is currently a favorite or not. If the user clicks on "Add to Favorites", the Pokemon shows up on the list of favorites, and the button changes to a white button with the text changing to "Remove from Favorites". Then, if the user clicks the button again, the Pokemon disappears from the list of favorites, the button changes to a blue button, and the text changes to "Add to Favorites".

