import { supabase } from "../../db";

export default class SignInService {
  static async signIn(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) return { success: false, error: error.message };
      return {
        success: true,
        session: data.session?.access_token,
        userId: data.user?.id,
      };
    } catch (err) {
      console.error("Erro ao fazer login:", err);
      return { success: false, error: "Erro interno do servidor." };
    }
  }
}
