import { DomNode } from "@common-module/app";
import { AppCompConfig } from "@common-module/app-components";
import { StringUtils } from "@common-module/ts";
import {
  KaiaWalletModuleConfig,
  KaiaWalletSessionManager,
} from "kaia-wallet-module";
import { formatEther } from "viem";
import InjeolmiContract from "./contracts/InjeolmiContract.js";
import SInjeolmiContract from "./contracts/SInjeolmiContract.js";

if (location.pathname === "/legacy/savings.html") {
  AppCompConfig.LoadingSpinner = class extends DomNode<HTMLImageElement> {
    constructor() {
      super("img", { src: "/images/loading.gif" });
    }
  };

  KaiaWalletModuleConfig.init({
    appName: "인절미.닷컴",
    walletConnectProjectId: "17f20ae9afff64763686bd15f8d9371a",
  });

  const connectedWalletAddress = new DomNode(
    document.querySelector(".connected-wallet-address") as HTMLDivElement,
  );

  const ijmBalance = new DomNode(
    document.querySelector(".ijm-balance") as HTMLDivElement,
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
      ijmBalance.text = "보유한 인절미: 연결되지 않음";
      withdrawableIJM.text = "출금 가능한 인절미: 연결되지 않음";
    } else {
      const balance = await InjeolmiContract.balanceOf(
        KaiaWalletSessionManager.getConnectedAddress()!,
      );
      ijmBalance.text = `보유한 인절미: ${
        StringUtils.formatNumberWithCommas(formatEther(balance), 3)
      }`;

      const withdrawable = await SInjeolmiContract.withdrawableIJM(
        KaiaWalletSessionManager.getConnectedAddress()!,
      );
      withdrawableIJM.text = `출금 가능한 인절미: ${
        StringUtils.formatNumberWithCommas(formatEther(withdrawable), 3)
      }`;
    }
  }

  renderConnected();
  KaiaWalletSessionManager.on("sessionChanged", () => renderConnected());

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

    if (
      !confirm(
        `${
          StringUtils.formatNumberWithCommas(formatEther(withdrawable), 3)
        } 인절미를 출금하시겠습니까?`,
      )
    ) {
      return;
    }

    await SInjeolmiContract.unstake(withdrawable);
    alert("출금되었습니다.");
    renderConnected();
  });
} else {
  const element = document.querySelector("img.logo");
  if (element) {
    const logo = new DomNode(element as HTMLImageElement);
    logo.onDom("mousedown", () => logo.htmlElement.src = "/images/logo2.png");
    logo.onDom("mouseup", () => logo.htmlElement.src = "/images/logo.png");
    logo.onDom("touchstart", (event) => {
      event.preventDefault();
      logo.htmlElement.src = "/images/logo2.png";
    });
    logo.onDom("touchend", () => logo.htmlElement.src = "/images/logo.png");
  }
}
