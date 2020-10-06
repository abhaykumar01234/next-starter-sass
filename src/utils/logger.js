const isLogEnabled =
  typeof window !== "undefined"
    ? (process.env.NEXT_PUBLIC_LOG_ENABLED_IN || "")
        .split(",")
        .some((env) => env === process.env.NEXT_PUBLIC_ENV)
    : (process.env.LOG_ENABLED_IN || "")
        .split(",")
        .some((env) => env === process.env.ENV);

// console.log("isLogEnabled", isLogEnabled);

const logger = {
  warn: (...props) => {
    if (isLogEnabled) {
      console.warn(...props);
    }
  },

  info: (...props) => {
    if (isLogEnabled) {
      console.info(...props);
    }
  },

  log: (...props) => {
    if (isLogEnabled) {
      console.log(...props);
    }
  },

  error: (...props) => {
    if (isLogEnabled) {
      console.error(...props);
    }
  },
};

module.exports = logger;
