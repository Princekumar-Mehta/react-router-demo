import { useParams } from "react-router-dom";
export function UserDetails() {
  const { userId } = useParams();
  //   const params = useParams();
  //   const userId = params.userId;
  return (
    <>
      <div>Details of user {userId}</div>
    </>
  );
}

// http://localhost:3000/users/2?filter=active   here filter is search params
