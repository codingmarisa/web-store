import { createContext, useState } from 'react';

import COLLECTIONS from '../data/collections.js';

export const CollectionsContext = createContext({
  collections: [],
});

export const CollectionsProvider = ({ children }) => {
  const [collections, setCollections] = useState(COLLECTIONS);
  const value = { collections };
  return (
    <CollectionsContext.Provider value={value}>
      {children}
    </CollectionsContext.Provider>
  );
};
