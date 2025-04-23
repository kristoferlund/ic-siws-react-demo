import { useWallet } from "@solana/wallet-adapter-react";
import { SiwsIdentityProvider } from "ic-siws-js/react";
import { canisterId } from "../../../ic_siws_provider/declarations/index";

export default function SiwsProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const walletContext = useWallet();

  return (
    <SiwsIdentityProvider
      canisterId={canisterId}
      adapter={walletContext.wallet?.adapter}
    >
      {children}
    </SiwsIdentityProvider>
  );
}
