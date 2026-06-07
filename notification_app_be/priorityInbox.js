import { fetchNotifications } from "./notifications.js";

function getWeight(type) {
  switch (type) {
    case "Placement":
      return 3;
    case "Result":
      return 2;
    case "Event":
      return 1;
    default:
      return 0;
  }
}

async function getPriorityNotifications(limit = 10) {

  const data = await fetchNotifications();

  const notifications = data.notifications;

  notifications.sort((a, b) => {

    const weightDiff =
      getWeight(b.Type) - getWeight(a.Type);

    if (weightDiff !== 0) {
      return weightDiff;
    }

    return (
      new Date(b.Timestamp) -
      new Date(a.Timestamp)
    );

  });

  return notifications.slice(0, limit);

}

getPriorityNotifications()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });