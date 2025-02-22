import { DomNode } from "@common-module/app";
import { KaiaWalletModuleConfig } from "kaia-wallet-module";

if (location.pathname === "/legacy/savings.html") {
  KaiaWalletModuleConfig.init({
    walletConnectProjectId: "17f20ae9afff64763686bd15f8d9371a",
  });

  new DomNode(
    document.querySelector("button.connect-wallet") as HTMLButtonElement,
  ).onDom("click", () => {
    console.log("connect wallet");
  });
}
