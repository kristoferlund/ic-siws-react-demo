import reactLogo from "./assets/react.svg";
import icLogo from "./assets/ic.svg";
import solLogo from "./assets/solana.svg";
import SignInButton from "./components/sign-in-button";
import SolanaPubkey from "./components/solana-pubkey";
import IcIdentity from "./components/ic-identity";
import ConnectButton from "./components/connect-button";

function App() {
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
      <div className="container">
        <SolanaPubkey />
        <IcIdentity />
        <ConnectButton />
        <SignInButton />
      </div>
      <div className="links">
        <a
          href="https://github.com/kristoferlund/ic-siws-react-demo"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.shields.io/badge/github-ic--siws--react--demo-blue.svg?style=for-the-badge"
            alt="GitHub repo"
          />
        </a>
      </div>
    </>
  );
}

export default App;
