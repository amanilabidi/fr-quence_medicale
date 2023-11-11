// pages/myaccount/Myaccount/[id].tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Myid() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/getUserById?id=${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, [id]);
  // You can use the 'id' parameter to fetch and display user-specific data
  // from your database or any other source.

  return (
    <div>
      <p>{id}</p>
      {/* Add more content related to the user account here */}
    </div>
  );
}
