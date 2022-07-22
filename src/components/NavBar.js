import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksList = links.map(link => {
    const correctHref = `#${link}`;
    return (<a key={link} href={correctHref}>{link}</a>)
  })

  return <nav>{linksList}</nav>;
}

export default NavBar;
