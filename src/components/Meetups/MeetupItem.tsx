import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavouritesContext from "../../store/favourites-context";
import { useNavigate } from "react-router-dom";

interface Props {
  data: {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
  };
}

const MeetupItem: React.FC<Props> = ({ data }) => {
  const favouritesCtx = useContext(FavouritesContext);
  const navigate = useNavigate();

  const itemIsFavourite: boolean = favouritesCtx.itemIsFavourte(data.id);

  const handleToggleFavouriteStatus = () => {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(data.id);
    } else {
      favouritesCtx.addFavourite({
        id: data.id,
        title: data.title,
        description: data.description,
        image: data.image,
        address: data.address,
      });
      navigate("/favourites", { replace: true });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={data.image} alt={data.title} />
        </div>
        <div className={classes.content}>
          <h3>{data.title}</h3>
          <address>{data.address}</address>
          <p>{data.description}</p>
        </div>

        <div className={classes.actions}>
          <button onClick={handleToggleFavouriteStatus}>
            {itemIsFavourite ? "Remove From Favourites" : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
