import { useNavigate } from "react-router-dom";
export function Home() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("order-summary");
        }}
      >
        Place Order
      </button>
      <h1>Home Page</h1>
    </>
  );
}
