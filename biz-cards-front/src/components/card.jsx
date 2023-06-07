import { Link } from "react-router-dom";

export const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={bizImage} alt={bizName} className="card-img-top mt-2" />
      <div className="card-body">
        <h5 className="card-title text-center">{bizName}</h5>
        <p className="card-text">{bizDescription}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item ps-0">
            <i className="bi bi-geo-alt-fill"></i>
            <span className="ms-2">{bizAddress}</span>
          </li>
          <li className="list-group-item ps-0">
            <i className="bi bi-telephone-fill"></i>
            <span className="ms-2">{bizPhone}</span>
          </li>
        </ul>
        <div className="links d-flex justify-content-between mt-2">
          <Link to={`/my-cards/view/${_id}`}>
            <span className="btn btn-secondary">
              <i className="bi bi-eye me-1"></i>View
            </span>
          </Link>
          <Link to={`/my-cards/edit/${_id}`}>
            <span className="btn btn-primary">
              <i className="bi bi-pencil-square me-1"></i>Edit
            </span>
          </Link>
          <Link to={`/my-cards/delete/${_id}`}>
            <span className="btn btn-danger">
              <i className="bi bi-trash me-1"></i>Delete
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
