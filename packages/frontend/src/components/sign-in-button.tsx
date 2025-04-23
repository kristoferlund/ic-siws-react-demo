import { useWallet } from "@solana/wallet-adapter-react";
import { useSiws } from "ic-siws-js/react";

export default function SignInButton() {
  const { login, loginStatus, identity, clear } = useSiws();
  const { wallet } = useWallet();

  if (!wallet) {
    return null;
  }

  if (identity) {
    return <button onClick={clear}>Logout</button>;
  }

  return (
    <button disabled={loginStatus === "logging-in"} onClick={login}>
      {loginStatus === "logging-in" ? "Signing in…" : "Sign in"}
    </button>
  );
}
