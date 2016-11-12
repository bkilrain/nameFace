import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const renderDecks = (deck, props) => {
  return (
    <MenuItem 
      key={deck.id} 
      primaryText={deck.deckName}
      onClick={ () => {
        props.onDeckSelect(deck.deckName);
      }}
    />
  );
};

const DeckList = (props) => {

  return (
    <Menu>
      {props.decks.map( (deck) => {
        return renderDecks(deck, props) })}
    </Menu>
  );
}

export default DeckList