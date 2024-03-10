import "./pagination.css";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="page pervious">Pervious</div>
      {[1, 2, 3, 4, 5].map((page) => (
        <div className="page" key={page}>
          {page}
        </div>
      ))}
      <div className="page next">Next</div>
    </div>
  );
};

export default Pagination;
