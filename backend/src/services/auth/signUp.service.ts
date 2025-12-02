import { supabase } from "../db";

export default class SignUpService {
  static async signUp(email: string, password: string, name: string) {
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        const message = error.message.includes("User already registered")
          ? "Email já cadastrado. Faça login ou use outro email."
          : error.message;
        return { success: false, error: message, userId: null };
      }
      const { error: profileError } = await supabase
        .from("profiles")
        .insert([{ id: data.user?.id, name, email }]);
      if (profileError)
        return { success: false, error: profileError.message, userId: null };
      return { success: true, error: null, userId: data.user?.id };
    } catch (err) {
      console.error("Erro ao registrar usuário:", err);
      return {
        success: false,
        error: "Erro interno do servidor.",
        userId: null,
      };
    }
  }
}
