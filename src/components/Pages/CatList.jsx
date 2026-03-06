import React, { useEffect, useState } from 'react'
import { GetCategoryMeals } from '../../Services/productApi'
import { Link } from 'react-router';
import usePagination from '../../custom-component/usePagination';
import Pagination from '../pagination/Pagination';

const Products = () => {

  const [allMeals, setAllMeals] = useState([]);


  const AllCategoryMeals = async () => {
    const mealData = await GetCategoryMeals("https://www.themealdb.com/api/json/v2/1/categories.php")
    setAllMeals(mealData.categories)
  }


  useEffect(() => {
    AllCategoryMeals()
  }, [])
  const { paginatedData, page, setPage } = usePagination(allMeals);


  if (allMeals.length === 0) {
    return (<div>
              <h1 className='text-blue-500 font-extrabold text-2xl px-7 text-center'>All Categories</h1>

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 py-4 px-5">

        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="bg-slate-400 rounded-md p-3 h-[350px] flex flex-col gap-3"
          >
            <div className="h-[170px] w-full rounded-md shimmer"></div>

            <div className="flex justify-between items-center">
              <div className="h-5 w-24 rounded shimmer"></div>
              <div className="h-5 w-20 rounded shimmer"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full rounded shimmer"></div>
              <div className="h-4 w-[90%] rounded shimmer"></div>
              <div className="h-4 w-[80%] rounded shimmer"></div>
            </div>
          </div>
        ))}

      </div></div>
    );
  }

  return (
    <div className='dark:bg-gray-900'>
      <h1 className='text-blue-500 font-extrabold text-2xl px-7 text-center'>All Categories</h1>

      <div className=" grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-3 sm:gap-4 sm:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] py-4 px-5 cursor-pointer">
        {
          paginatedData && paginatedData.map((ele, i) => <Link to={`/foodcategori/${ele.strCategory}`} className="bg-slate-500 rounded-md p-2" key={ele.idCategory}>
            <div className=" rounded-md"><img className=" rounded-md" src={ele.strCategoryThumb} alt={ele.strCategory} /></div>
            <div className=" flex justify-between  py-2"><span className="text-green-900  font-bold text-lg" >{ele.strCategory}</span><span className=" text-blue-700 italic">Starts from Rs.<span className='font-bold text-lg'>{(Math.random() * 1000).toFixed(2)}</span></span></div>
            <div className="line-clamp-3 italic my-2">{ele.strCategoryDescription}</div>
          </Link>)
        }
      </div>
      <Pagination data={allMeals} page={page} setPage={setPage} />

    </div>
  )
}

export default Products