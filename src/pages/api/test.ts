import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "src/types/next";

export default (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (req.method === "GET") {
    // get message
    const test = req.query;
    const { socket: { server: { io } = { io: { emit: () => {} } } } = {} } =
      res || {};

    // dispatch to channel "message"
    io.emit("test", test);

    // return message
    res.status(201).json(test);
  }
};
