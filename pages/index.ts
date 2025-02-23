import { createPage, el } from "@common-module/static-site-generator";

export default function index() {
  return createPage(
    {
      title: "인절미.닷컴",
      jsFiles: ["/bundle.js"],
      cssFiles: ["/bundle.css"],
      coverImageURL: "/images/cover.png",
      twitterHandle: "@SigorWorld",
    },
    el(
      "section",
      el("h1", "인절미.닷컴"),
      el("img", {
        src: "/images/logo.png",
      }),
      el(
        "p",
        "인절미는 개발자 ",
        el("a", "yj.gaia", {
          href: "https://github.com/yjgaia",
          target: "_blank",
        }),
        "가 만든 ",
        el("a", "Kaia 블록체인", {
          href: "https://www.kaia.io",
          target: "_blank",
        }),
        " 기반 밈코인입니다.\n삭막한 크립토 시장에서 따뜻함과 재미를 주는 것을 목표로 합니다.",
      ),
      el(
        ".button-container",
        el("a.button", "거래하기", {
          href:
            "https://klayswap.com/ko/swap?inputCurrency=0x0000000000000000000000000000000000000000&outputCurrency=0x0268dbed3832b87582B1FA508aCF5958cbb1cd74",
          target: "_blank",
        }),
        el("a.button", "소스코드", {
          href: "https://github.com/sigorworld/injeolmi",
          target: "_blank",
        }),
      ),
    ),
    el("section", el("h2", "특징")),
    el("section", el("h2", "인절미가 걸어온 길")),
    el(
      "section",
      el("h2", "패밀리 사이트"),
      el(
        "ul",
        el(
          "li",
          el("a", "시고르", {
            href: "https://sigor.com",
            target: "_blank",
          }),
        ),
        el(
          "li",
          el("a", "시고르 트위터", {
            href: "https://x.com/SigorWorld",
            target: "_blank",
          }),
        ),
        el(
          "li",
          el("a", "메이트 앱 시고르 참새방", {
            //TODO: href: "https://x.com/SigorWorld",
            target: "_blank",
          }),
        ),
        el(
          "li",
          el("a", "시고르 참새 NFT", {
            href: "https://opensea.io/collection/sigor-sparrows",
            target: "_blank",
          }),
        ),
        el(
          "li",
          el("a", "시고르 집문서 NFT", {
            href: "https://opensea.io/collection/sigor-house-deeds",
            target: "_blank",
          }),
        ),
      ),
    ),
    el("section.memes", el("h2", "밈")),
    el(
      "section.extra",
      el("a", "절미 적금에 예치한 적이 있다면 > 출금하기", {
        href: "/legacy/savings.html",
      }),
    ),
  );
}
