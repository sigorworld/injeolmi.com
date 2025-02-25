import { createPage, el } from "@common-module/static-site-generator";

export default function savings() {
  return createPage(
    {
      title: "(구) 절미 적금",
      description:
        "절미 적금이 종료되어, 기존에 예치한 인절미의 출금만 가능합니다.",
      jsFiles: ["/bundle.js"],
      cssFiles: ["/bundle.css"],
      coverImageURL: "https://injeolmi.com/images/cover.png",
      twitterHandle: "@SigorWorld",
    },
    el(
      "section",
      el("h2", "(구) 절미 적금"),
      el(
        "p",
        "절미 적금이 종료되어, 기존에 예치한 인절미의 출금만 가능합니다.",
      ),
      el(".connected-wallet-address", "지갑 주소:"),
      el(".ijm-balance", "보유한 인절미:"),
      el(".withdrawable-ijm", "출금 가능한 인절미:"),
      el(
        ".button-container",
        el("button.connect-wallet", "지갑 연결"),
        el("button.withdraw-ijm", "출금하기"),
      ),
    ),
  );
}
