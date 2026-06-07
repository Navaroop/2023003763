import axios from "axios";
import 'dotenv/config';

const TOKEN = process.env.ACCESS_TOKEN;

export async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      error.response?.data || error.message
    );
  }
}