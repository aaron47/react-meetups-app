import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

interface Props {
  data: {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
  }[];
}

const MeetupList: React.FC<Props> = ({ data }) => {
  return (
    <ul className={classes.list}>
      {data.map(
        (
          item: {
            id: string;
            title: string;
            image: string;
            address: string;
            description: string;
          },
          index: number
        ) => {
          return <MeetupItem key={index} data={item} />;
        }
      )}
    </ul>
  );
};

export default MeetupList;
