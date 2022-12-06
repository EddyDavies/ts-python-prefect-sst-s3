import { MyStack } from "./MyStack";
import { App } from "@serverless-stack/resources";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "python3.9",
    srcPath: "services",
    bundle: {
      installCommands: ["pip install -r requirments.txt ."]
    },
    environment: {
      // PREFECT_HOME: process.env.PREFECT_HOME,
      PREFECT_API_KEY: process.env.PREFECT_API_KEY,
      PREFECT_API_URL: process.env.PREFECT_API_URL,
  },
  });
  app.stack(MyStack);
}