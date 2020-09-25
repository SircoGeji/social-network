import styles from "./Paginator.module.css";
import React from "react";

let Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  onPagesPaginator,
  showMorePages,
  ...props
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let pagesClose = pages.slice(
    currentPage < 7 ? 0 : currentPage - 5,
    currentPage < 7 ? 11 : currentPage + 5
  );

  /*{
        {pages.map(p => {
            return (
                <span
                    className={currentPage === p && styles.selectedPage}
                    onClick={() => {
                        onPageChanged(p)
                    }}>{p + " "}
                </span>
            )
        })}
    }*/
  return (
    <div className={styles.block}>
      <div className={styles.paginator}>
        {currentPage - 1 ? (
          <button
            onClick={() => {
              onPageChanged(currentPage - 1);
            }}
          >
            Previous
          </button>
        ) : null}

        {
          showMorePages && (
            <span
              className={pagesClose.indexOf(currentPage) && styles.selectedPage}
              onClick={() => {
                //onPageChanged(pagesClose.indexOf());
              }}
            >
              {pagesClose}
            </span>
          )
          // <span
          //   className={currentPage === p && styles.selectedPage}
          //   onClick={() => {
          //     onPageChanged(p);
          //     console.log(pages);
          //     console.log(pages.slice(currentPage, 11));
          //   }}
          // >
          //   {p + " "}
          // </span>
        }
        {!showMorePages && (
          <button
            onClick={() => {
              onPagesPaginator(true);
              console.log(showMorePages);
            }}
            className={styles.pages_button}
          >
            ...
          </button>
        )}

        {currentPage + 1 ? (
          <button
            onClick={() => {
              onPageChanged(currentPage + 1);
            }}
          >
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Paginator;
