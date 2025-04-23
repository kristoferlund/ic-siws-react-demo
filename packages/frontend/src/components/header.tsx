import reactLogo from "./assets/react.svg";
import icLogo from "./assets/ic.svg";
import solLogo from "./assets/solana.svg";

export default function Header() {
  return (
    <>
      <div className="logo-group">
        <a href="https://internetcomputer.org" target="_blank">
          <img src={icLogo} className="logo" alt="Internet Computer" />
        </a>
        <a href="https://solana.com" target="_blank">
          <img src={solLogo} className="logo" alt="Solana" />
        </a>
        <a href="https://www.react.dev/" target="_blank">
          <img src={reactLogo} className="logo" alt="React" />
        </a>
      </div>
      <h1>Sign in with Solana</h1>
      <p>
        This demo authenticates Solana users against an IC canister using{" "}
        <a href="https://www.npmjs.com/package/ic-siws-js">ic-siws-js</a>.
      </p>
      <div className="pill-container">
        <span className="pill">React version</span>
      </div>
    </>
  );
}
