import React, { useEffect, useState } from 'react'
import { GetCategoryMeals, GetRandomMeals } from '../../Services/productApi'
import "../../App.css"
import { Link } from 'react-router';

const Home = () => {

  const [randomMeals, setRandomMeals] = useState({});
  const [videoId, setVideoId] = useState([]);
  const [foodCat, setfoodCat] = useState([])


  

  function extractVideoId(url) {
    const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/)|https?:\/\/youtu\.be\/|^)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  const AllCategoryMeals = async () => {
    const mealData = await GetRandomMeals()
    setRandomMeals(mealData.meals[0])
    setVideoId(extractVideoId(mealData.meals[0].strYoutube));
    const foodCate = await GetCategoryMeals("https://www.themealdb.com/api/json/v2/1/categories.php")
    setfoodCat(foodCate.categories)
  }

  useEffect(() => {
    AllCategoryMeals()
  }, [])


  function horozontal_Scroll(direction, speed, dist, steps) {
    let element = document.getElementById("food-catogories")
    var scrollAmount = 0;
    var slideTimer = setInterval(() => {
      if (direction == 'left')
        element.scrollLeft -= steps;
      else
        element.scrollLeft += steps;

      scrollAmount += steps;

      if (scrollAmount >= dist) {
        window.clearInterval(slideTimer);

      }
    }, speed)
  }
  return (
  <div className='dark:bg-gray-900'>
    <div className=" px-8 py-2 flex flex-col items-center">
      <div className=" text-orange-800 font-extrabold text-3xl">Spacial Today </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  py-4  h-auto items-center">
        {/* Product Card */}
        {randomMeals && (
          <div
            className="rounded-md  shadow-md p-4 w-full h-[360px]"
            key={randomMeals.idCategory}
          >
            <div className="rounded-md overflow-hidden h-2/3 cursor-pointer">
              <img
                className="w-full h-full object-cover"
                src={randomMeals.strMealThumb}
                alt={randomMeals.strCategory}
              />
            </div>
            <div className="flex justify-between font-bold text-lg py-1">
              <span className="text-green-900">{randomMeals.strCategory}</span>
              <span className="text-blue-700">Rs.{(Math.random() * 1000).toFixed(2)}</span>
            </div>
            <div className="line-clamp-2 italic my-1 text-gray-700 dark:text-gray-300">
              {randomMeals.strInstructions}
            </div>
            <div className='text-blue-600 cursor-pointer'><Link to={`/foodcategori/${randomMeals.strCategory}`}> Know More...</Link></div>
          </div>
        )}

        {/* YouTube Video */}
        <div className="w-full h-[360px] flex flex-col items-center gap-8 justify-center">
          <h1 className="font-extrabold text-blue-800 text-3xl">Watch full Recipe  on Youtube</h1>
          <iframe
            className="w-3/5 sm:w-4/5 h-3/5 sm:h-full rounded-md shadow-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h2 className=' italic text-blue-700'>watch how our Chef 🧑‍🍳 make it </h2>
        </div>
      </div>

    </div>
    <div>
      <h1 className=' text-blue-500 font-extrabold text-2xl px-7 dark:text-white'>Popular categories</h1>
    <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-hidden">
      {/* Left Navigation Button */}
      <button onClick={() => { horozontal_Scroll('left', 25, 100, 10) }} id="left-btn-nav" className="flex-shrink-0 dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-left"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </button>

      {/* Food Categories */}
      <div className="flex overflow-x-auto space-x-4  scrollbar-hidden" id='food-catogories'>
        {foodCat &&
          foodCat.map((ele) => (
            <Link to={`/foodcategori/${ele.strCategory}`} className='rounded-md p-2 flex-shrink-0' key={ele.idCategory}>
              <div className="rounded-full shadow-md">
                <img
                  className="rounded-md w-36 h-36"
                  src={ele.strCategoryThumb}
                  alt={ele.strCategory}
                />
              </div>
              <div className="flex justify-center items-center font-bold text-lg py-2">
                <span className="text-green-900">{ele.strCategory}</span>
              </div>
            </Link>
          ))}
      </div>

      {/* Right Navigation Button */}
      <button onClick={() => { horozontal_Scroll('right', 25, 100, 10) }} id="right-btn-nav" className="flex-shrink-0 dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-right"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </button>
    </div>
    </div>
  </div>
  )
}

export default Home