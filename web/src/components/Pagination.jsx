export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const renderPagination = () => {
    if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`mx-1 px-3 py-1 rounded text-sm ${
            currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {number}
        </button>
      ));
    } else {
      return (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`mx-1 px-3 py-1 rounded text-sm ${
              currentPage === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            1
          </button>

          {currentPage > 3 && <span className="mx-1 px-3 py-1 text-sm">...</span>}
          {currentPage > 2 && (
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className="mx-1 px-3 py-1 rounded text-sm bg-gray-200"
            >
              {currentPage - 1}
            </button>
          )}

          {currentPage !== 1 && currentPage !== totalPages && (
            <button
              onClick={() => onPageChange(currentPage)}
              className="mx-1 px-3 py-1 rounded text-sm bg-blue-500 text-white"
            >
              {currentPage}
            </button>
          )}

          {currentPage < totalPages - 1 && (
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className="mx-1 px-3 py-1 rounded text-sm bg-gray-200"
            >
              {currentPage + 1}
            </button>
          )}
          {currentPage < totalPages - 2 && <span className="mx-1 px-3 py-1 text-sm">...</span>}

          <button
            onClick={() => onPageChange(totalPages)}
            className={`mx-1 px-3 py-1 rounded text-sm ${
              currentPage === totalPages ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {totalPages}
          </button>
        </>
      );
    }
  };

  return <div className="flex justify-center mt-4">{renderPagination()}</div>;
}