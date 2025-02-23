import { DomNode } from "@common-module/app";
import {
  KaiaWalletModuleConfig,
  KaiaWalletSessionManager,
} from "kaia-wallet-module";
import { formatEther } from "viem";
import SInjeolmiContract from "./contracts/SInjeolmiContract.js";

if (location.pathname === "/legacy/savings.html") {
  KaiaWalletModuleConfig.init({
    appName: "인절미.닷컴",
    walletConnectProjectId: "17f20ae9afff64763686bd15f8d9371a",
  });

  const connectedWalletAddress = new DomNode(
    document.querySelector(".connected-wallet-address") as HTMLDivElement,
  );

  const withdrawableIJM = new DomNode(
    document.querySelector(".withdrawable-ijm") as HTMLDivElement,
  );

  const connectWalletButton = new DomNode(
    document.querySelector("button.connect-wallet") as HTMLButtonElement,
  ).onDom("click", () => {
    if (KaiaWalletSessionManager.isConnected()) {
      KaiaWalletSessionManager.disconnect();
    } else {
      KaiaWalletSessionManager.connect();
    }
  });

  async function renderConnected() {
    connectedWalletAddress.text = `지갑 주소: ${
      KaiaWalletSessionManager.getConnectedAddress() ?? "연결되지 않음"
    }`;
    connectWalletButton.text = KaiaWalletSessionManager.isConnected()
      ? "지갑 연결 해제"
      : "지갑 연결";

    if (!KaiaWalletSessionManager.isConnected()) {
      withdrawableIJM.text = "출금 가능한 인절미: 연결되지 않음";
    } else {
      const withdrawable = await SInjeolmiContract.withdrawableIJM(
        KaiaWalletSessionManager.getConnectedAddress()!,
      );
      withdrawableIJM.text = `출금 가능한 인절미: ${formatEther(withdrawable)}`;
    }

    new DomNode(
      document.querySelector("button.withdraw-ijm") as HTMLButtonElement,
    ).onDom("click", async () => {
      if (!KaiaWalletSessionManager.isConnected()) {
        alert("지갑을 연결해주세요.");
        return;
      }

      const withdrawable = await SInjeolmiContract.withdrawableIJM(
        KaiaWalletSessionManager.getConnectedAddress()!,
      );

      if (withdrawable === 0n) {
        alert("출금 가능한 인절미가 없습니다.");
        return;
      }

      if (!confirm(`${formatEther(withdrawable)} 인절미를 출금하시겠습니까?`)) {
        return;
      }

      await SInjeolmiContract.unstake(withdrawable);
      alert("출금되었습니다.");
    });
  }

  renderConnected();
  KaiaWalletSessionManager.on("sessionChanged", () => renderConnected());
}
