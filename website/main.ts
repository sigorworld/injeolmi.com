import { DomNode } from "@common-module/app";
import { KaiaWalletModuleConfig } from "kaia-wallet-module";
import SInjeolmiContract from "./contracts/SInjeolmiContract.js";

if (location.pathname === "/legacy/savings.html") {
  KaiaWalletModuleConfig.init({
    walletConnectProjectId: "17f20ae9afff64763686bd15f8d9371a",
  });

  new DomNode(
    document.querySelector("button.connect-wallet") as HTMLButtonElement,
  ).onDom("click", () => {
    console.log("connect wallet");
  });

  console.log(
    await SInjeolmiContract.withdrawableIJM(
      "0x5d3C6E36538f485C3483B1C0d3e27a3416E16217",
    ),
  );
}
