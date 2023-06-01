import { Request, Response } from "express";

class UserController {
  async store(req: Request, res: Response) {
    try {
      return res.json({ ok: true });
    } catch (err) {
      return res.json({ error: true });
    }
  }

  async index(req: Request, res: Response) {
    try {
      return res.json({ ok: true });
    } catch (err) {
      return res.json({ error: true });
    }
  }

  async show(req: Request, res: Response) {
    try {
      return res.json({ ok: true });
    } catch (err) {
      return res.json({ error: true });
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

export default new UserController();
