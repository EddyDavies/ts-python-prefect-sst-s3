declare namespace NodeJS {
    export interface ProcessEnv {
      TEST_ENV?: string;
      PREFECT_HOME: string;
      PREFECT_API_KEY: string;
      PREFECT_API_URL: string;
    }
  }