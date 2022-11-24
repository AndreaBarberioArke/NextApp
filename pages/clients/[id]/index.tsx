import { useRouter } from "next/router";

export const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);
  console.log(router.pathname);

  const leadProjectHandler = () => {
    //load data...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  };

  return (
    <div>
      <h1>The projects of a Given Client</h1>
      <button onClick={leadProjectHandler}>Lead Project A</button>
    </div>
  ); 
};

export default ClientProjectsPage;
