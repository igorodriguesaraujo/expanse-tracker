import { Request, Response } from "express";
import { IExpanse } from "./type";
import { prisma } from "../../database";

class ExpanseController {
  async store(req: Request, res: Response) {
    try {
      const { userid: userId }: any = req.headers;
      const { name, description, amount, type }: IExpanse = req.body;

      const userExists = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!userExists) throw new Error("User not exist!");

      const { id } = userExists;

      await prisma.expanse.create({
        data: {
          name,
          description,
          amount,
          type,
          userId: id,
        },
      });

      return res.status(201).json({
        error: false,
        message: "Expanse created!",
      });
    } catch (err) {
      return res.status(400).json({ error: true, message: err });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const { userid }: any = req.headers;

      if (!userid) {
        return res
          .status(400)
          .json({ error: true, message: "User not exist!" });
      }

      const userExist = await prisma.user.findUnique({
        where: {
          id: userid,
        },
      });

      if (!userExist) {
        return res
          .status(400)
          .json({ error: true, message: "User not found!" });
      }

      const expanses = await prisma.expanse.findMany({
        where: {
          userId: userExist.id,
        },
      });

      return res.json({ error: false, expanses });
    } catch (err) {
      return res.json({ error: true, message: err });
    }
  }

  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { userid }: any = req.headers;

      if (!userid) {
        return res
          .status(400)
          .json({ error: true, message: "User not exist!" });
      }

      const user = await prisma.user.findUnique({
        where: {
          id: userid,
        },
      });

      if (!user) {
        return res
          .status(400)
          .json({ error: true, message: "User not found!" });
      }

      const expanse = await prisma.expanse.findFirst({
        where: {
          id,
          userId: user.id,
        },
      });

      return res.json({ error: false, expanse });
    } catch (err) {
      return res.json({ error: true, message: err });
    }
  }

  async update(req: Request, res: Response) {
    try {
      return res.json({ ok: true });
    } catch (err) {
      return res.json({ error: true });
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      return res.json({ ok: true });
    } catch (err) {
      return res.json({ error: true });
    }
  }
}

export default new ExpanseController();
