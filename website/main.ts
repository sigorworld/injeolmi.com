import { DomNode } from "@common-module/app";
import {
  KaiaWalletModuleConfig,
  KaiaWalletSessionManager,
} from "kaia-wallet-module";

if (location.pathname === "/legacy/savings.html") {
  KaiaWalletModuleConfig.init({
    appName: "인절미.닷컴",
    walletConnectProjectId: "17f20ae9afff64763686bd15f8d9371a",
  });

  const connectWalletButton = new DomNode(
    document.querySelector("button.connect-wallet") as HTMLButtonElement,
  ).onDom("click", () => {
    if (KaiaWalletSessionManager.isConnected()) {
      KaiaWalletSessionManager.disconnect();
    } else {
      KaiaWalletSessionManager.connect();
    }
  });

  function renderConnected() {
    connectWalletButton.text = KaiaWalletSessionManager.isConnected()
      ? "지갑 연결 해제"
      : "지갑 연결";
  }

  renderConnected();
  KaiaWalletSessionManager.on("sessionChanged", () => renderConnected());
}
