// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { cors } from "components/middleware";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  res.status(200).json({ name: "John Doe" });
}
