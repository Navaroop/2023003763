import dotenv from "dotenv";
dotenv.config();

import "dotenv/config";
import axios from "axios";
import { Log } from "../logging_middleware/logger.js";

const TOKEN = process.env.ACCESS_TOKEN;

async function fetchNotifications() {

    await Log(
        "backend",
        "info",
        "service",
        "Fetching notifications"
    );

  const response = await axios.get(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    }
  );

  return response.data;
}

export { fetchNotifications };