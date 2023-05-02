import { Outlet, useSearchParams } from "react-router-dom";

export function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <>
      <div>
        <h1>user 1</h1>
        <h1>user 2</h1>
        <h1>user 3</h1>
      </div>
      <div>
        <button
          onClick={() => {
            setSearchParams({ filter: "active" });
          }}
        >
          Active Users
        </button>
        <button
          onClick={() => {
            setSearchParams({});
          }}
        >
          Rset Filter
        </button>
      </div>
      {showActiveUsers ? (
        <h2>showing active users</h2>
      ) : (
        <h2>show all users</h2>
      )}
      <Outlet />
    </>
  );
}
