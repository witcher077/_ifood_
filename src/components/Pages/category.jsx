import React, { useEffect, useState } from 'react';
import { GetPaticularCat } from '../../Services/productApi';
import { redirect, useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from '../../Features/Cart';

const Category = () => {
    const [paticularCat, setPaticularCat] = useState([]);
    const [error, setError] = useState(null);

    const category = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartList = useSelector((state) => state.cart.cartItems);
    const credential = useSelector((state) => state.Login.Credentials);

    const PaticularCat = async () => {
        try {
            const mealData = await GetPaticularCat(category.foodcat);
            setPaticularCat(mealData.meals || []);
        } catch (err) {
            setError("Failed to fetch category items. Please try again later.");
            console.error(err);
        }
    };

    useEffect(() => {
        PaticularCat();
    }, [category.foodcat]); // Update effect dependency to react to route changes

    const addCart = (ele) => {
        // console.log(ele);
        if (credential.isLoggedIn) {
            dispatch(addToCart({
                id: ele.idMeal,
                productName: ele.strMeal,
                productImage: ele.strMealThumb,
                productPrice: (Math.random() * 1000).toFixed(2),
            }));
        }
        else{
            navigate('/login')
        }
    };

    if (error) {
        return <div className="text-red-600 text-center py-4">{error}</div>;
    }

    if (paticularCat.length === 0) {
        return (
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-3 sm:gap-4 sm:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] py-4 px-5 cursor-pointer">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="bg-slate-500 rounded-md p-2 h-[350px]"></div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-3 sm:gap-4 sm:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] py-4 px-5 cursor-pointer dark:bg-gray-900">
            {paticularCat.map((ele) => (
                <div
                    className="bg-slate-500 rounded-md p-2 flex flex-col h-[350px]"
                    key={ele.idMeal}
                >
                    <div className="rounded-md">
                        <img
                            className="rounded-md w-full object-cover h-[200px]"
                            src={ele.strMealThumb}
                            alt={ele.strMeal}
                        />
                    </div>

                    {/* Text Section */}
                    <div className="flex-grow flex flex-col justify-between">
                        <div className="flex justify-between font-bold text-lg py-2">
                            <span className="text-green-900">{ele.strMeal}</span>
                            <span className="text-blue-700">
                                Rs.{(Math.random() * 1000).toFixed(2)}
                            </span>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <button
                            className="bg-green-400 text-white text-lg w-full rounded-md p-2 font-bold"
                            onClick={() => addCart(ele)}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Category;
