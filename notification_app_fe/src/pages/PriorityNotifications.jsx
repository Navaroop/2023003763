import { useState } from "react";
import { notifications } from "../data/notifications";
import NotificationCard from "../components/NotificationCard";
import { TextField } from "@mui/material";

export default function PriorityNotifications() {
  const [limit, setLimit] = useState(10);

  const priorityOrder = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  const sortedNotifications = [...notifications]
    .sort(
      (a, b) =>
        priorityOrder[b.Type] -
        priorityOrder[a.Type]
    )
    .slice(0, limit);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Priority Inbox</h1>

      <TextField
        label="Top N"
        type="number"
        value={limit}
        onChange={(e) =>
          setLimit(Number(e.target.value))
        }
        sx={{ mb: 2 }}
      />

      {sortedNotifications.map((item) => (
        <NotificationCard
          key={item.ID}
          notification={item}
          viewed={false}
        />
      ))}
    </div>
  );
}