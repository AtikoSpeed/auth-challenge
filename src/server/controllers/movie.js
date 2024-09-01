import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const jwtSecret = "mysecret";

const getAllMovies = async (req, res) => {
  const movies = await prisma.movie.findMany();

  res.json({ data: movies });
};

const createMovie = async (req, res) => {
  const { title, description, runtimeMins } = req.body;

  try {
    const token = req.headers.authentication;
    // todo verify the token
    jwt.verify(token, jwtSecret);
  } catch (e) {
    return res.status(401).json({ error: "Invalid token provided." });
  }

  const createdMovie = await prisma.movie.create({
    data: {
      title: title,
      description: description,
      runtimeMins: runtimeMins,
    },
  });

  console.log(createdMovie);
  res.json({ data: createdMovie });
};

export { getAllMovies, createMovie };
