import React, { useEffect, useState } from "react";

const Reminder = () => {
  const [remindersList, updateRemindersList] = useState([
    "reminder 1",
    "reminder 2",
    "reminder 3",
  ]);
  const [reminderToDisplay, updateReminder] = useState("");

  const getRandomNumber = (maxNumber) => {
    return Math.floor(Math.random() * Math.floor(maxNumber));
  };

  useEffect(() => {
    const index = getRandomNumber(remindersList.length);
    if (remindersList.length) updateReminder(remindersList[index]);
  }, remindersList);

  return (
    <div>
      <h1>{reminderToDisplay}</h1>
    </div>
  );
};

export default Reminder;
