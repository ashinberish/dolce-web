const env = import.meta.env.VITE_APP_IA_ENV || "local";

export function envswitch<T>(vals: {
  local?: T;
  staging?: T;
  production?: T;
}): T {
  const res =
    vals[
      (env as keyof {
        local?: T;
        staging?: T;
        production?: T;
      }) || "local"
    ];
  if (res === undefined) {
    throw new Error(
      `No value specified for env '${env}' in ${JSON.stringify(vals)}`
    );
  }
  return res;
}

export class ConfigBase {
  ENV = env;

  COMMIT_SHA = import.meta.env.VITE_APP_COMMIT_SHA || "local";
  BUILD_DATE = import.meta.env.VITE_APP_BUILD_DATE || "local";
  RELEASE =
    import.meta.env.VITE_APP_RELEASE ||
    (this.BUILD_DATE == "local"
      ? "local"
      : `${this.BUILD_DATE}/${this.COMMIT_SHA.slice(0, 7)}`);

  IS_LOCAL = envswitch({
    local: true,
    staging: false,
    production: false,
  });

  IS_DEV = envswitch({
    local: true,
    staging: true,
    production: false,
  });

  IS_PROD = envswitch({
    local: false,
    staging: false,
    production: true,
  });

  IS_TEST = envswitch({
    local: false,
    staging: false,
    production: false,
  });
}

export class IATheRecipesWebConfig extends ConfigBase {
  API_URL =
    import.meta.env.VITE_APP_API_URL ||
    envswitch({
      local: "http://localhost:6565/api",
      staging: "https://localhost:6565/api",
      production: "https://localhost:6565/api",
    });
}

export const config = new IATheRecipesWebConfig();
