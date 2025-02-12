import React, { useEffect, useState } from 'react'
import { GetCategoryMeals } from '../../Services/productApi'
import { Link, useParams } from 'react-router';
import { addToCart, removeFromCart } from '../../Features/Cart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


const OneIngredient = () => {

  const [allMeals, setAllMeals] = useState([]);

  const ingredient = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AllCategoryMeals = async () => {
    const mealData = await GetCategoryMeals(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient.foodingredient}`)
    setAllMeals(mealData.meals)
    console.log(mealData);

  }
  const credential = useSelector((state) => state.Login.Credentials);



  const AddTocart = (ele) => {
    if (credential.isLoggedIn) {
      dispatch(addToCart({
        id: ele.idMeal,
        productName: ele.strMeal,
        productImage: ele.strMealThumb,
        productPrice: (Math.random() * 1000).toFixed(2),
      }));
    }
    else {
      navigate('/login')
    }
  }



  useEffect(() => {
    AllCategoryMeals()
  }, [])
  return (
    <div>
      <h1 className='text-blue-500 font-extrabold text-2xl px-7 text-center'>
        {ingredient.foodingredient}
      </h1>

      <div className=" grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-3 sm:gap-4 sm:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] py-4 px-5 cursor-pointer">
        {
          allMeals && allMeals.map((ele, i) => <div className="bg-slate-500 rounded-md p-2" key={ele.idMeal}>
            <Link to={`/fooddetails/${ele.idMeal}`} ><div className=" rounded-md"><img className=" rounded-md" src={ele.strMealThumb} alt={ele.strCategory} /></div>
              <div className=" flex justify-between  py-2"><span className="text-green-900  font-bold text-lg" >{ele.strMeal}</span><span className=" text-blue-700 italic"><span className='font-bold text-lg'>{(Math.random() * 1000).toFixed(2)}</span></span></div>
            </Link>
            <div className='flex justify-center items-center'><button onClick={() => { AddTocart(ele) }} className='bg-green-400 text-white text-lg w-full rounded-md p-2 font-bold'>Add to cart</button></div>
          </div>)
        }
      </div>

    </div>
  )
}

export default OneIngredient