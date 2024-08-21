// src/data/menuItems.js

const MENU_ITEMS = [
  { name: "Home", type: "link", href: "#home" },
  { name: "Works", type: "link", href: "#works" },
  { name: "About", type: "link", href: "#about" },
  {
    name: "github",
    type: "icon",
    iconType: "fab",
    href: "https://github.com/KoenigWolf",
  },
  {
    name: "qiita",
    type: "icon",
    iconType: "fas",  // "fab"はブランド系のアイコンに使用されますが、Font Awesomeにqiitaアイコンがない場合は"fas"を使用
    href: "https://qiita.com/KoenigWolf",
  },
  {
    name: "envelope",
    type: "icon",
    iconType: "fas",
    href: "mailto:toshikiii7@gmail.com",
  },
];

export default MENU_ITEMS;
