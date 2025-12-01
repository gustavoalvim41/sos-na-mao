import { Request, Response } from "express";
import SignUpService from "../services/signUp.service";
import SignInService from "../services/signIn.service";
import SignOutService from "../services/signOut.service";

type RegisterBody = {
  email: string;
  password: string;
  name: string;
};

type LoginBody = {
  email: string;
  password: string;
};

export default class UserController {
  static async signUp(req: Request, res: Response) {
    const { email, password, name } = req.body as RegisterBody;
    if (!email || !password || !name) {
      return res.status(400).json({ error: "Preencha todos os campos." });
    }
    const result = await SignUpService.signUp(email, password, name);
    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }
    return res.status(201).json({
      message: "conta cadastrada com sucesso.",
      userId: result.userId,
    });
  }
  static async signIn(req: Request, res: Response) {
    const { email, password } = req.body as LoginBody;
    if (!email || !password) {
      return res.status(400).json({ error: "Preencha email e senha." });
    }
    const result = await SignInService.signIn(email, password);
    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }
    return res.status(200).json({
      message: "login realizado com sucesso.",
      session: result.session,
      userId: result.userId,
    });
  }
  static async signOut(req: Request, res: Response) {
    const result = await SignOutService.signOut();
    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }
    return res.status(200).json({ message: result.message });
  }
}
