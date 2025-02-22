import { createPage, el } from "@common-module/static-site-generator";

export default function savings() {
  return createPage(
    {
      title: "(구) 절미 적금",
      jsFiles: ["/bundle.js"],
      cssFiles: ["/bundle.css"],
    },
    el(
      "section",
      el("h2", "(구) 절미 적금"),
      el(
        "p",
        "절미 적금이 종료되어, 기존에 예치한 인절미의 출금만 가능합니다.",
      ),
      el(
        ".button-container",
        el("button.connect-wallet", "지갑 연결"),
        el("button", "출금하기"),
      ),
    ),
  );
}
