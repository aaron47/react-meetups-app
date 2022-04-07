import { NavigateFunction, useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/Meetups/NewMeetupForm";

const NewMeetupsPage: React.FunctionComponent = () => {
  const navigate: NavigateFunction = useNavigate();

  const onAddMeetup = (meetupData: {
    title: string;
    image: string;
    address: string;
    description: string;
  }) => {
    fetch(
      "https://react-meetups-e7e8-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </section>
  );
};
export default NewMeetupsPage;
