import { useState } from "react";
import Layout from "./layout/Layout";

function App() {
  const [page, setPage] = useState("home"); // default page

  return <Layout page={page} setPage={setPage} />;
}

export default App;
