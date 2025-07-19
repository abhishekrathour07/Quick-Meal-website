// Frontend config file
const config = {
  API_URL: import.meta.env.VITE_API_URL || "http://localhost:3005",
  APP_ENV: import.meta.env.VITE_APP_ENV || "development"
};

export default config;
