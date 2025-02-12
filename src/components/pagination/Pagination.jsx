import React from 'react'

const Pagination = ({ data, page, setPage }) => {
    const arr = Array.from({ length: Math.ceil(data.length / 10) }, (_, index) => index + 1);

    console.log(data);

    const gotoPage = (page) => {
        if (page > 0 && page <= arr.length) {
            console.log(page);

            setPage(page)
        }
    }

    return (
        <div className='py-3 flex justify-center'>
            <button onClick={() => gotoPage(page - 1)} className=' border border-black p-3 cursor-pointer'>Prev</button>
            {
                arr.map((ele, i) => {

                    if (ele === page || ele == page + 1 || ele == page - 1) {
                        return <span onClick={() => gotoPage(ele)} className={`border border-black py-3 px-4 cursor-pointer ${page === ele && "bg-slate-400"}`}>
                            {ele}
                        </span>
                    }
                }
                )
            }
            <button onClick={() => gotoPage(page + 1)} className=' border border-black p-3 cursor-pointer'>Next</button>
        </div>
    )
}

export default Pagination;