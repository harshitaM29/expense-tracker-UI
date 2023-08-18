import ReactPaginate from 'react-paginate';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector,  } from 'react-redux';
import { Fragment, useEffect, useRef, useState } from 'react';
import { fetchExpenseData } from '../../store/expenses-actions';
import classes from './Pagination.module.css';
import React from 'react';
const Pagination = () => {
    const tokenId = localStorage.getItem('token');
    const storedLimit = localStorage.getItem('limit');
    const dispatch = useDispatch();
    const currentPage = useRef();
    const [limit,setLimit] = useState(storedLimit || 10);
    const pageCount = useSelector(state=> state.expense.pageCount);
    const handlePageClick = (e) => {
        currentPage.current = e.selected + 1;
        dispatch(fetchExpenseData(tokenId,currentPage.current,limit))
    }
    useEffect(() => {
        currentPage.current = 1;
        dispatch(fetchExpenseData(tokenId,currentPage.current,limit))
       
    }, []);
    function changeLimit() {
        localStorage.setItem('limit',limit)
        dispatch(fetchExpenseData(tokenId,currentPage.current,limit))
    }

    return (
        <Fragment>
             <input className={classes.input} placeholder='Rows Per Page' onChange={e => setLimit(e.target.value)} />
        <Button className={classes.button} onClick={changeLimit}>Change</Button>
      
    <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={handlePageClick}
    pageRangeDisplayed={5}
    pageCount={pageCount}
    previousLabel="< previous"
    renderOnZeroPageCount={null}
    marginPagesDisplayed={2}
       
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
  />
    </Fragment>
    )
};

export default React.memo(Pagination);
