const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://komik-582y7kxzy-cahyasaga321.vercel.app";
