import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const jwtSecret = "mysecret";

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const cryptHash = await bcrypt.hash(password, 10);

    const createdUser = await prisma.user.create({
      data: {
        username: username,
        password: cryptHash,
      },
    });

    res.status(201).json("User created successfully");
  } catch {
    res.status(409).json("User already exists");
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const foundUser = await prisma.user.findUnique({
    where: { username: username },
  });

  if (!foundUser) {
    return res.status(401).json({ error: "Invalid username." });
  }

  const passwordsMatch = await bcrypt.compare(password, foundUser.password);

  if (!passwordsMatch) {
    return res.status(401).json({ error: "Invalid password." });
  }

  const token = jwt.sign(username, jwtSecret);
  console.log(token);
  res.json({ data: token });
};

export { register, login };
