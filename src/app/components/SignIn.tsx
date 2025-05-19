"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  // GitHubでログインボタンがクリックされたときの処理
  const handleLogin = async () => {
    await signIn("github", { callbackUrl: "/dashboard" });
  };

  return <button onClick={handleLogin}>GitHubでログイン</button>;
}
