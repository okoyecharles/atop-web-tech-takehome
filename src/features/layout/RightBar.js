import React from "react";

// Notifications
import Image1 from "../../assets/notifications/bug.svg";
import Image2 from "../../assets/notifications/user.svg";
import Image3 from "../../assets/notifications/signal.svg";
// Activities
import Image4 from "../../assets/activities/eve.png";
import Image5 from "../../assets/activities/aliah.png";
import Image6 from "../../assets/activities/drew.png";
import Image7 from "../../assets/activities/kate.png";
import Image8 from "../../assets/activities/lana.png";

const notifications = [
  {
    image: Image1,
    title: "You have a bug that needs to be fixed",
    description: "email@gmail.com",
  },
  {
    image: Image2,
    title: "New user registered",
    description: "1:23 AM",
  },
  {
    image: Image1,
    title: "You have a bug that needs to be fixed",
    description: "0:32 AM",
  },
  {
    image: Image3,
    title: "Andi Lane sent payment",
    description: "Yesterday 12:39 AM",
  },
];

const activities = [
  {
    image: Image4,
    title: "Added entries to Kelowna",
    description: "email@gmail.com",
  },
  {
    image: Image5,
    title: "Added students",
    description: "1:32 AM",
  },
  {
    image: Image6,
    title: "Submitted a bug",
    description: "Yesterday 12:39 AM",
  },
  {
    image: Image7,
    title: "Uploaded music",
    description: "Last Thursday 3:34 AM",
  },
  {
    image: Image8,
    title: "Deleted entry",
    description: "Aug 11",
  },
];

const RightBar = () => {
  return (
    <section className="border-l border-gray-700 w-64 py-5">
      <div className="notifications-container px-4">
        <header className="text-base text-gray-200 font-medium">
          <h2>Notifications</h2>
        </header>
        <ul className="pt-4 flex flex-col gap-2">
          {notifications.map((notification) => (
            <li className="flex gap-1 cursor-pointer">
              <div className="notification-image w-8 flex-shrink-0">
                <img
                  src={notification.image}
                  alt={notification.title.toLowerCase()}
                />
              </div>
              <div className="flex flex-col truncate">
                <h3 className="text-gray-200 truncate leading-5">
                  {notification.title}
                </h3>
                <p className="text-sm truncate">{notification.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="activities-container px-4 mt-8">
        <header className="text-base text-gray-200 font-medium">
          <h2>Acitivities</h2>
        </header>
        <ul className="pt-4 flex flex-col gap-4">
          {activities.map((activity) => (
            <li className="flex gap-2 cursor-pointer">
              <div className="activity-image w-8 h-8 flex-shrink-0">
                <img src={activity.image} alt={activity.title.toLowerCase()} />
              </div>
              <div className="flex flex-col truncate">
                <h3 className="text-gray-200 truncate leading-5">
                  {activity.title}
                </h3>
                <p className="text-sm truncate">{activity.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RightBar;
