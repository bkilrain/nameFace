import loki from 'lokijs';
import path from 'path';

const db = new loki(path.resolve('./db/cache/loki.db'), {
  persistenceMethod: 'fs',
  autoload: true,
  autosave: true
});
let store;

export default new Promise( (resolve, reject) => {
    db.loadDatabase(null, (err) => {
      if (err) {
        console.log('Creating DB');
        store = db.addCollection('store');
        store.insert({
            decks: [
                {
                    id: 0,
                    deckName: 'First Deck',
                    createdAt: 'yesterday',
                    someOtherStats: 'blah blah blah',
                    photos: []
                },
                {
                    id: 1,
                    deckName: 'testDeck432',
                    createdAt: 'yesterday',
                    someOtherStats: 'blah blah blah',
                    photos: []
                },
                {
                    id: 2,
                    deckName: 'AHHHHHHHH',
                    createdAt: 'yesterday',
                    someOtherStats: 'blah blah blah',
                    photos: []
                }

            ], 
            stats: {
                totalFaces: 0,
                namesPlaced: 0,
                somethingElse: 110
            }});
        db.saveDatabase();
      } else {
        store = db.getCollection('store');
      }
    resolve(store);
    });
});


