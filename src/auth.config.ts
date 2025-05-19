import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: { signIn: "/login" },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard && !isLoggedIn) {
        return false; // 未ログインで保護ページにアクセス → ログインページへ
      }

      return true; // それ以外は通す（ログイン済み or 非保護ページ）
    },
  },
  providers: [], // プロバイダは auth.ts 側で設定
} satisfies NextAuthConfig;
