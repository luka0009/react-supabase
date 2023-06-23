import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    PROJECT_URL: process.env.VALUE,
    API_KEY: process.env.VALUE,
  },
  plugins: [react()],
});
