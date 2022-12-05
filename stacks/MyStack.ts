import { StackContext, Api, Bucket, Function } from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "functions/lambda.handler",
      "GET /create": "functions/created.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  const bucket = new Bucket(stack, 'landingBucket', {
    defaults: {
      function: {
        timeout: 20,
        environment: { }
      }
    },
    notifications: {
      eventCreated: {
        function: "src/created.handler",
        events: ["object_created"],
      },
    },
  });
  api.bind([bucket]);

  new Function(stack, "CreateObject", {
    handler: "functions/created.handler",
    bundle: {
      installCommands: [
        "pip install prefect awswrangler"

      ]},
    environment: {
      PREFECT_HOME: process.env.PREFECT_HOME,
      PREFECT_API_KEY: process.env.PREFECT_API_KEY,
      PREFECT_API_URL: process.env.PREFECT_API_URL,
    },
  });
}
