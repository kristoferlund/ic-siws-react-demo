import "@solana/wallet-adapter-react-ui/styles.css";
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import SiwsProviders from "./providers/siws-provider.tsx";
import SolanaProviders from "./providers/solana-providers.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SolanaProviders>
      <SiwsProviders>
        <App />
      </SiwsProviders>
    </SolanaProviders>
  </StrictMode>,
);
