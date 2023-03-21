import React from "react";
import notifications from "../data/notifications";
import activities from "../data/activities";

const RightBar = () => {
  return (
    <section className="border-l border-gray-700 w-64 py-5">
      <div className="notifications-container px-4">
        <header className="text-base text-gray-200 font-medium">
          <h2>Notifications</h2>
        </header>
        <ul className="pt-4 flex flex-col gap-2">
          {notifications.map((notification, index) => (
            <li className="flex gap-1 cursor-pointer" key={index}>
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
          {activities.map((activity, index) => (
            <li className="flex gap-2 cursor-pointer" key={index}>
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
