import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null); // to store the resolved data
  const [loading, setLoading] = useState(true); // to handle the loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/test");

        console.log(response.data.message);

        setData(response.data.message); // store the resolved data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // update loading state
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // display loading state
  }

  return (
    <div>
      {data ? (
        <div style={{ background: "gray", color: "white" }}>{data}</div>
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default App;
