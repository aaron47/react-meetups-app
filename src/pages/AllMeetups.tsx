import { useState, useEffect } from "react";
import MeetupList from "../components/Meetups/MeetupList";

const AllMeetupsPage: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [meetups, setMeetups] = useState<any[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-meetups-e7e8-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => {
        return res.json();
      })
      .then((data: any) => {
        const meetups: any[] = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        console.log(meetups);

        setMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section>
        <h1>All meetups</h1>
        <ul>
          <MeetupList data={meetups} />
        </ul>
      </section>
    </>
  );
};

export default AllMeetupsPage;
