import { useAuth } from "../../context/auth.context";

export function HeaderUser() {
  const { user } = useAuth();
  return (
    <div>
      <p className="my-0 text-center lh-1">
        {user ? (
          <i style={{ fontSize: "20px" }} className="bi bi-person-fill"></i>
        ) : (
          <i style={{ fontSize: "20px" }} className="bi bi-person-x-fill"></i>
        )}
      </p>
      <p style={{ fontSize: "12px" }} className="my-0 text-center lh-1">
        {!user ? null : !user?.biz ? "Regular" : user?.biz ? "Business" : null}
      </p>
    </div>
  );
}
