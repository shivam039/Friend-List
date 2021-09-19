import React from "react";
import sort from '../assets/images/sort.png'
import '../assets/stylesheets/pagination.scss'

const Pagination = props => {
    const { chunkedList, pageNo, nextBtnClick, prevBtnClick, sortFunc } = props;
    return <div className='foot'>
        <span>Page {pageNo + 1} of {chunkedList.length}</span>
        <button disabled={pageNo + 1 === 1} onClick={prevBtnClick}>Prev</button>
        <button disabled={pageNo + 1 === chunkedList.length} onClick={nextBtnClick}>Next</button>
        <img className='icon' src={sort} alt="sort-icon" onClick={sortFunc} />
    </div>

}

export default Pagination;