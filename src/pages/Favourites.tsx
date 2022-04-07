import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/Meetups/MeetupList";

const FavouritesPage: React.FunctionComponent = () => {
  const favouritesCtx = useContext(FavouritesContext);

  let content;

  if (favouritesCtx.totalFavourites === 0) {
    content = <p>You got no favourites yet</p>;
  } else {
    content = <MeetupList data={favouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
};
export default FavouritesPage;
