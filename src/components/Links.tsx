import React from "react";

const Links = () => {
  const links = [
    { name: "About", url: "#" },
    { name: "Mail", url: "#" },
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
