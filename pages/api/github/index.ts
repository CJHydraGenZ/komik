// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getCommitList, getCommitMessage } from "components/github/octokit";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // await runMiddleware(req, res, cors);
  try {
    //komikidc.vercel
    const data = await getCommitMessage();
    return res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error });
  }
}

// Access to XMLHttpRequest at 'http://localhost:3000/api/komik' from origin 'https://komik-eight.vercel.app' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
