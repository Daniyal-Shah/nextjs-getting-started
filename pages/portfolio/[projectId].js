import React from "react";
import { useRouter } from "next/router";

function PortfolioProjectPage(props) {
  const router = useRouter();

  console.log(router.query);
  console.log(router.pathname);
  return (
    <div>
      <h1>PortfolioProjectPage</h1>
    </div>
  );
}

export default PortfolioProjectPage;
