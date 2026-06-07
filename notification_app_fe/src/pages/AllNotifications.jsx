import NotificationCard from "../components/NotificationCard";
import { notifications } from "../data/notifications";

export default function AllNotifications() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>All Notifications</h1>

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          notification={item}
          viewed={false}
        />
      ))}
    </div>
  );
}