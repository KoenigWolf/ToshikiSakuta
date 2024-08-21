// src/components/AboutSection.js

import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="h-auto p-8 bg-[#3b82f6] bg-opacity-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#eff6ff] mb-4 text-left">About</h2>
        <p className="text-sm md:text-base text-[#eff6ff] text-left text-justify">
          兵庫県出身のエンジニア。中学時代に趣味で作ったWebサイトが友人にウケたのをきっかけにWebに興味を持つ。
          高校で情報を学び、大学では工業デザインを専攻。卒業後は、自動車の電子回路設計に携わる。
          クラウド技術の可能性に惹かれ、IT業界へ転身。Azure環境構築、サイバーセキュリティ対策の経験を有する。
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
