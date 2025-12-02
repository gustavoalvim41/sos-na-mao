import { supabase } from "../../db";

export default class SignOutService {
  static async signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        return { success: false, error: error.message };
      }
      return { success: true, message: "Logout realizado com sucesso!" };
    } catch (err) {
      console.error("Erro ao fazer logout:", err);
      return { success: false, error: "Erro interno do servidor." };
    }
  }
}
