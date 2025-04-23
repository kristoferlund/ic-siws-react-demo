import { useSiws } from "ic-siws-js/react";

export default function IcIdentity() {
  const { identity } = useSiws();

  if (!identity) {
    return null;
  }

  const formattedIdentity =
    identity.getPrincipal().toString().slice(0, 4) +
    "..." +
    identity.getPrincipal().toString().slice(-4);

  return <div>{formattedIdentity}</div>;
}
