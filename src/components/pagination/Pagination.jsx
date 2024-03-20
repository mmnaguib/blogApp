import "./pagination.css";

const Pagination = ({ pages, currentPage, setCount }) => {
  const pageNumbers = [];

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <button
        onClick={() => setCount(currentPage - 1)}
        className="page pervious"
        disabled={currentPage === 1}
      >
        Pervious
      </button>
      {pageNumbers.map((page) => (
        <div
          onClick={() => setCount(page)}
          className={currentPage === page ? "page active" : "page"}
          key={page}
        >
          {page}
        </div>
      ))}
      <button
        onClick={() => setCount(currentPage + 1)}
        className="page next"
        disabled={currentPage === pages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
