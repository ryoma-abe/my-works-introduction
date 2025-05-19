// src/app/(auth)/login/page.tsx など
import { signIn } from "@/auth";

export default function LoginPage() {
  const handleLogin = async () => {
    await signIn("github", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="p-8">
      <h1>ログイン</h1>
      <button onClick={handleLogin}>GitHubでログイン</button>
    </div>
  );
}
