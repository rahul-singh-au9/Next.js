import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length >= 1) {
    return (
      <center>
        <h1>param 1 - {params[0]}</h1>
        <h1>param 2 - {params[1]}</h1>
      </center>
    );
  }

  return (
    <center>
      <h1>DOC HOME PAGE</h1>
    </center>
  );
};

export default Doc;
