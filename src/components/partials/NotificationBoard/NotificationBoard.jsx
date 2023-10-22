import React, { useEffect, useState } from "react";
import NotFoundNotifications from "../../components/NotFoundNotifications/NotFoundNotifications";
import NotificationsCard from "../../components/NotificationsCard/NotificationsCard";
import { Btn, Cads } from "./Notifications.styled";

function NotificationBoard({ setIsVisible }) {
  const [notifications, setNotifications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let abortController = new AbortController();

    function getAPI() {
      //   fetch("https://command.views.page/api/command")
      fetch(`./api/notifications`)
        .then(async (res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          var data = await res.json();
          setNotifications(data);
        })
        .catch((e) => console.log(e));
    }

    getAPI();

    return () => abortController.abort();
  }, [currentPage]);

  console.log(notifications);

  return (
    <React.Fragment>
      {notifications?.length > 0 ? (
        <React.Fragment>
          <Cads>
            {notifications?.map((elem, key) => (
              <NotificationsCard
                key={key}
                title={elem.title}
                date={elem.date}
                description={elem.description}
                id={elem.id}
              />
            ))}
            <Btn onClick={() => setIsVisible(false)}>Fechar</Btn>
          </Cads>
        </React.Fragment>
      ) : (
        <NotFoundNotifications />
      )}
    </React.Fragment>
  );
}

export default NotificationBoard;
