import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null); // to store the resolved data
  const [loading, setLoading] = useState(true); // to handle the loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deploy-practice-api.vercel.app/api/test"
        );

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data ? (
        <div style={{ background: "gray", color: "white" }}>{data}</div>
      ) : (
        <div>No data found more</div>
      )}
    </div>
  );
};

export default App;
