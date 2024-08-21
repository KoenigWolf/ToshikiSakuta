import React from "react";

const WorksSection = () => {
  const projects = [
    {
      title: "East Projects",
      description: "East Projects Webサイト制作",
      imgSrc: "/images/Higashi Akimitsu.jpeg", // サムネイル画像のパス
      url: "https://eastprojects.jp/", // 遷移先のURL
    },
    {
      title: "ALBADX",
      description: "ALBADX Webサイト制作",
      imgSrc: "/images/albadx.jpg", // サムネイル画像のパス
      url: "https://albadx.vercel.app/", // 遷移先のURL
    },
    {
      title: "DENTAKU",
      description: "DENTAKU App",
      imgSrc: "/images/dentaku.jpeg", // サムネイル画像のパス
      url: "https://dentaku-kappa.vercel.app/", // 遷移先のURL
    },
  ];

  return (
    <section id="works" className="h-auto p-8 bg-[#1e3a8a] bg-opacity-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#eff6ff] mb-8 text-left">Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={project.imgSrc} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
