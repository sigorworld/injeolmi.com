import { createPage, el } from "@common-module/static-site-generator";

export default function index() {
  return createPage(
    {
      title: "인절미.닷컴",
      description:
        "인절미는 개발자 yj.gaia가 만든 Kaia 블록체인 기반 밈코인입니다. 삭막한 크립토 시장에서 따뜻함과 재미를 주는 것을 목표로 합니다.",
      jsFiles: ["/bundle.js"],
      cssFiles: ["/bundle.css"],
      coverImageURL: "https://injeolmi.com/images/cover.png",
      twitterHandle: "@SigorWorld",
    },
    el(
      "section",
      el("h1", "인절미.닷컴"),
      el("img.logo", {
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
    el(
      "section.features",
      el("h2", "특징"),
      el(
        "ul",
        el(
          "li",
          el("h3", "개발자 물량 없음"),
          el(
            "p",
            "개발자 물량이 없습니다. 개발자는 인절미로 수익을 창출하지 않습니다.",
          ),
        ),
        el(
          "li",
          el("h3", "LP 토큰 소각"),
          el(
            "p",
            "LP 토큰은 모두 소각되었으므로, 인절미는 영구적으로 거래 가능합니다.",
          ),
        ),
      ),
    ),
    el(
      "section.timeline",
      el("h2", "인절미가 걸어온 길"),
      el(
        "ul",
        el(
          "li",
          el("h3", "2021년 11월 4일"),
          el("p", "인절미 스마트계약 배포"),
        ),
        el(
          "li",
          el("h3", "2021년 12월 20일"),
          el(
            "p",
            el("a", el("img", { src: "/images/donation.jpg" }), {
              href: "/images/donation.jpg",
              target: "_blank",
            }),
            "떡방앗간 참새들 이름으로 한국미혼모가족협회 천만원 기부",
          ),
        ),
        el(
          "li",
          el("h3", "2021년 말"),
          el(
            "p",
            "인절미 홀더 대상 4천만원 상당 NFT 에어드롭 (개발자 개인 자금 출자)",
          ),
        ),
        el(
          "li",
          el("h3", "2022년 1월 16일"),
          el(
            "p",
            "인절미 하드포크 실행, 증권성 여부 우려가 있는 떡크노믹스 제거",
          ),
        ),
        el(
          "li",
          el("h3", "2021 12월 28일"),
          el(
            "p",
            "개당 1,000 인절미로 시고르 참새 NFT 민팅\n",
            el("i", "* 민팅한 인절미는 모두 락업(이후 전액 소각)"),
          ),
        ),
        el(
          "li",
          el("h3", "2022 2월 28일"),
          el(
            "p",
            "참새 NFT 홀더들에게 집문서 NFT 에어드롭\n",
            el("i", "* 참새 NFT 1개당 1개의 집문서 NFT 지급"),
          ),
        ),
      ),
    ),
    el(
      "section.family",
      el("h2", "패밀리 사이트"),
      el(
        "ul",
        el(
          "li",
          el("a", "시고르 (개발중)", {
            //href: "https://sigor.com",
            //target: "_blank",
            href: "javascript:alert('개발중이여~')",
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
          el("a", "메이트 앱 시고르 참새방 (개발중)", {
            //TODO: href: "https://x.com/SigorWorld",
            //target: "_blank",
            href: "javascript:alert('개발중이여~')",
          }),
        ),
        el(
          "li",
          el("a", "시고르 참새 NFT (오픈씨)", {
            href: "https://opensea.io/collection/sigor-sparrows",
            target: "_blank",
          }),
        ),
        el(
          "li",
          el("a", "시고르 집문서 NFT (오픈씨)", {
            href: "https://opensea.io/collection/sigor-house-deeds",
            target: "_blank",
          }),
        ),
      ),
    ),
    el(
      "section.extra",
      el("a", "절미 적금에 예치한 적이 있다면 > 출금하기", {
        href: "/legacy/savings.html",
      }),
    ),
    el(
      "section.memes",
      el("h2", "밈"),
      el("p", "인절미 홀더들이 만든 밈들입니다."),
      el(
        "ul",
        ...Array.from({ length: 82 }, (_, i) => i).map((i) =>
          el(
            "li",
            el("a", el("img", { src: `/images/memes/${i}.png` }), {
              href: `/images/memes/${i}.png`,
              target: "_blank",
            }),
          )
        ),
      ),
    ),
    el("footer", el("img", { src: "/images/thankyou.gif" })),
  );
}
