import Link from "next/link";
import React from "react";

function ClientsPage(props) {
  let clients = [
    { id: "dani", name: "Daniyal" },
    { id: "bilal", name: "Bilal" },
  ];
  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
