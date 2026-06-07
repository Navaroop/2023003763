import { Log } from "./logger.js";

async function test() {
  const result = await Log(
    "frontend",
    "info",
    "api",
    "Testing logging middleware"
  );

  console.log(result);
}

test();