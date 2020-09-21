import styles from "./Paginator.module.css";
import React from "react";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
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
    return <div className={styles.pages}>
        {
            (currentPage - 1)
                ? <button
                    onClick={() => {
                        onPageChanged(currentPage - 1)
                    }}
                >Previous</button>
                : null
        }

        <button
            className={styles.pages_button}
            onClick={() => {
                pages.map(p => {
                    return (
                        <span
                            className={currentPage === p && styles.selectedPage}
                            onClick={() => {
                                onPageChanged(p)
                            }}>{p + " "}
                </span>
                    )
                })
            }}
        >
            ...
        </button>

        {
            (currentPage + 1)
                ? <button
                    onClick={() => {
                        onPageChanged(currentPage + 1)
                    }}
                >Next</button>
                : null
        }

    </div>
}

export default Paginator

