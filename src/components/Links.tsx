import React from "react";

const Links = () => {
  const links = [
    { name: "About", url: "https://read.cv/sgospodinov" },
    { name: "Mail", url: "mailto:s.gospodinov02@gmail.com" },
    { name: "Instagram", url: "https://www.instagram.com/sgospodinov02" },
  ];

  return (
    <div className="flex gap-4 mt-4">
      {links.map(({ name, url }) => (
        <a className="text-lg" key={name + url} href={url}>
          {name}
        </a>
      ))}
    </div>
  );
};

export default Links;
