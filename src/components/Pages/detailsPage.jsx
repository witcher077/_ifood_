import React, { useEffect, useState } from 'react'
import { GetFoodDetails } from '../../Services/productApi'
import { Link, useParams } from 'react-router';

const DetailsPage = () => {

    const [Meal, setMeal] = useState({})
    const foodId = useParams()
    const [videoId, setVideoId] = useState([]);

    function extractVideoId(url) {
        const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/)|https?:\/\/youtu\.be\/|^)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
      }
    const AllCategoryMeals = async () => {
        const mealData = await GetFoodDetails(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId.food}`);
        setVideoId(extractVideoId(mealData.meals[0].strYoutube));
        setMeal(mealData.meals[0])
        console.log(mealData.meals[0]);

    }
    useEffect(() => {
        AllCategoryMeals()
    }, [])
    return (
        <div className=" mt-4 min-h-full">
            <div className="w-full p-6 shadow-xl rounded-lg overflow-hidden">
                {/* <!-- Food Image and Details Section --> */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* <!-- Food Image and Details --> */}
                    <div className="lg:w-1/2">
                        <div className="mb-6 w-3/2">
                            <img src={Meal.strMealThumb} alt={Meal.strMeal} className="rounded-lg w-full object-cover shadow-md h-80" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold text-gray-800 mb-4">{Meal.strMeal}</h1>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {Meal.strInstructions}
                            </p>
                            <div className='flex justify-between'>
                            <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white py-3 px-6 rounded-full font-semibold shadow-lg transform hover:translate-y-1 transition-transform duration-300">
                                Add to Cart
                            </button>
                            <span className=' italic text-blue-700 font-bold text-lg'>
                            Rs.{(Math.random() * 1000).toFixed(2)}
                            </span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- YouTube Video --> */}
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Watch the Recipe</h2>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                className="w-full h-96 rounded-md shadow-lg"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage