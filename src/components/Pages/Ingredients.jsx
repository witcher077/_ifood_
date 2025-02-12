import React, { useEffect, useState } from 'react'
import { GetCategoryMeals } from '../../Services/productApi'
import { Link } from 'react-router';
import usePagination from '../../custom-component/usePagination';
import Pagination from '../pagination/Pagination';

const Products = () => {

  const [allMeals, setAllMeals] = useState([]);

  const AllCategoryMeals = async () => {
    const mealData = await GetCategoryMeals("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    setAllMeals(mealData.meals)
    console.log(mealData);
  }

  useEffect(() => {
    AllCategoryMeals()
  }, [])

  const {paginatedData, page, setPage} = usePagination(allMeals);

  return (
    <div className='dark:bg-gray-900'>
      <h1 className='text-blue-500 font-extrabold text-2xl px-7 text-center'>All Ingredient</h1>

      <div className=" grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-3 sm:gap-4 sm:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] py-4 px-5 cursor-pointer">
        {
          paginatedData && paginatedData.map((ele, i) => <Link to={`/ingredient/${ele.strIngredient}`} className="bg-slate-500 rounded-md p-2 flex px-6 items-center justify-center gap-2 w-full" key={ele.idIngredient}>
            <div className=" rounded-md w-1/3"><img className=" rounded-full" src="https://cdn.pixabay.com/photo/2023/05/30/16/56/food-8029158_640.png" alt={ele.strIngredient} /></div>
            <div className=" flex flex-col">
              <span className="text-green-900  font-bold text-lg" >{ele.strIngredient}</span>
              <div className="line-clamp-2 italic my-2">{ele.strDescription}</div>
            </div>

          </Link>)
        }
      </div>
      <Pagination data={allMeals} page={page} setPage={setPage}/>


    </div>
  )
}

export default Products