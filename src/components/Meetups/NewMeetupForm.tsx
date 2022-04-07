import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (data: {
  onAddMeetup: (arg0: {
    title: string;
    image: string;
    address: string;
    description: string;
  }) => void;
}) => {
  const titleInputRef =
    useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;

  const imgInputRef =
    useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;

  const addressInputRef =
    useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;

  const descriptionTextareaRef =
    useRef<HTMLTextAreaElement>() as React.MutableRefObject<HTMLTextAreaElement>;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imgInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionTextareaRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    data.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imgInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionTextareaRef}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
