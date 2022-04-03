import React from "react";
import { useRouter } from "next/router";

function ClientsProjectPage() {
  const router = useRouter();

  function buttonHandler() {
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "dani", clientProjectId: "A" },
    });
  }

  return (
    <div>
      <h1>Clients Project Page</h1>
      <button onClick={buttonHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsProjectPage;
