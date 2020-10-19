import React from 'react'
import { PaginationItem } from 'reactstrap';

export const Pagination = ({ pageSize, totalCount, paginate }) => {

    const pageNumbers = [];

    for (let  i = 1; i <= Math.ceil(totalCount / pageSize); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick = {() => paginate(number)} href='/' className="page-link">
                            {number}
                        </a>
                        {/* <button onClick= {() => paginate(number)}>{number}</button> */}
                    </li>
                ))}
            </ul>   
        </nav>
    )
}

export default Pagination
