import Link from "next/link";

interface clientData {
  id: string;
  name: string;
}
interface Props {
  children?: React.ReactNode;
}

export const ClientsPage: React.FC<Props> = () => {
  const client: clientData[] = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>

      {client.map((client) => {
        return (
          <ul>
            <li key={client.id}>
              <Link key={client.id}
                href={{
                  pathname: "/clients/[id]",
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ClientsPage;
