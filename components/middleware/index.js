// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
import Cors from "cors";

// Initializing the cors middleware
export const cors = Cors({
  methods: ["GET", "HEAD"],
});

export function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
