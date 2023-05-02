import { useNavigate } from "react-router-dom";
export function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <h1>order confirmed</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        go back
      </button>
    </>
  );
}
