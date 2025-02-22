
  
  export default function Pagination({ totalPages, currentPage, onPageChange }) {
    const renderPageNumbers = () => {
      const pages = []
  
      // Always show first page
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors
            ${currentPage === 1 ? "bg-blue-500 text-white" : "text-gray-400 hover:text-gray-700"}`}
        >
          1
        </button>,
      )
  
      // Show dots after first page if needed
      if (currentPage > 4) {
        pages.push(
          <span key="dots1" className="px-2 text-gray-400">
            ...
          </span>,
        )
      }
  
      // Show current page and surrounding pages
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        if (i <= currentPage + 1 && i >= currentPage - 1) {
          pages.push(
            <button
              key={i}
              onClick={() => onPageChange(i)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors
                ${currentPage === i ? "bg-blue-500 text-white" : "text-gray-400 hover:text-gray-700"}`}
            >
              {i}
            </button>,
          )
        }
      }
  
      // Show dots before last page if needed
      if (currentPage < totalPages - 3) {
        pages.push(
          <span key="dots2" className="px-2 text-gray-400">
            ...
          </span>,
        )
      }
  
      // Always show last page
      if (totalPages > 1) {
        pages.push(
          <button
            key={totalPages}
            onClick={() => onPageChange(totalPages)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors
              ${currentPage === totalPages ? "bg-blue-500 text-white" : "text-gray-400 hover:text-gray-700"}`}
          >
            {totalPages}
          </button>,
        )
      }
  
      return pages
    }
  
    return <div className="flex items-center justify-center gap-1">{renderPageNumbers()}</div>
  }
  
  