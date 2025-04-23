import "@solana/wallet-adapter-react-ui/styles.css";
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import SiwsProvider from "./providers/siws-provider.tsx";
import SolanaProviders from "./providers/solana-providers.tsx";

// Wrap the application with the Solana providers to get access to wallets and a wallet selection popup
// Wrap the application with the Siws provider to make Sign In With Solana work throughout the app
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SolanaProviders>
      <SiwsProvider>
        <App />
      </SiwsProvider>
    </SolanaProviders>
  </StrictMode>,
);
