import SignInButton from "./components/sign-in-button";
import SolanaPubkey from "./components/solana-pubkey";
import IcIdentity from "./components/ic-identity";
import ConnectButton from "./components/connect-button";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <SolanaPubkey />
        <IcIdentity />
        <ConnectButton />
        <SignInButton />
      </div>
      <Footer />
    </>
  );
}

export default App;
