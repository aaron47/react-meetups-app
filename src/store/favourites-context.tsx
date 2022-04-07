import { createContext, useState } from "react";

const FavouritesContext = createContext<{
  favourites: any[];
  totalFavourites: number;
  addFavourite: (favouriteMeetup: any) => void;
  removeFavourite: (meetupId: string) => void;
  itemIsFavourte: (meetupId: string) => boolean;
}>({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId: string) => {},
  itemIsFavourte: (meetupId: string) => true || false,
});

interface Props {
  children: React.ReactNode;
}

export const FavouritesContextProvider: React.FC<Props> = ({ children }) => {
  const [userFavourites, setUserFavourites] = useState<any[]>([]);

  const handleAddFavourites = (favouriteMeetup: any): void => {
    // setUserFavourites([...userFavourites, favouriteMeetup]);
    setUserFavourites((prevUserFavourites: any[]) => {
      return prevUserFavourites.concat(favouriteMeetup);
    });
  };
  const handleRemoveFavourites = (meetupId: string): void => {
    setUserFavourites((prevUserFavourites: any[]) => {
      return prevUserFavourites.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const handleItemIsFavourite = (meetupId: string): boolean => {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  };

  const context: {
    favourites: any[];
    totalFavourites: number;
    addFavourite: (favouriteMeetup: any) => void;
    removeFavourite: (meetupId: string) => void;
    itemIsFavourte: (meetupId: string) => boolean;
  } = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: handleAddFavourites,
    removeFavourite: handleRemoveFavourites,
    itemIsFavourte: handleItemIsFavourite,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
