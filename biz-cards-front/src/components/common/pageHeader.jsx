export function PageHeader({ title, description }) {
  return (
    <>
      <div className="row mt-4">
        <div className="col-12">
          <h1 className="text-center">{title}</h1>
        </div>
      </div>
      {description && (
        <div className="row mt-3">
          <div className="col-12">
            <p className="text-center">{description}</p>
          </div>
        </div>
      )}
    </>
  );
}
