import React from "react";
import { useRouter } from "next/router";

function ClientsSpecificProject(props) {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Clients Specific Project</h1>
    </div>
  );
}

export default ClientsSpecificProject;
