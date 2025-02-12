import React, { useState } from 'react'

const Payment = () => {
    const [method, setMethod] = useState("UPI")

    const ChangePaymentMethod = (methodName) => {
        setMethod(methodName)
    }

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Choose a Payment Method</h1>
                <p className="text-center text-gray-600 mb-6">Select your preferred payment method below to complete the payment.</p>
                <div className="text-center text-lg font-medium text-gray-800 mb-6">
                    Total Amount: <span className="text-green-500 font-bold text-lg">Rs. 5000/-</span>
                </div>
                <div className='flex w-full'>
                    <div class=" w-1/3 rounded-lg shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] ">
                        <div onClick={() => ChangePaymentMethod("QR")} class="p-1 w-full cursor-pointer ">
                            <div class="bg-gray-100 rounded flex p-4  items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                    class={` text-gray-500 ${method === "QR" && "text-indigo-500"} w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24`}>
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="font-medium">QR Payments</span>
                            </div>
                        </div>
                        <div onClick={() => ChangePaymentMethod("CARD")} class="p-1 w-full cursor-pointer">
                            <div class="bg-gray-100 rounded flex p-4  items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                    class={` text-gray-500 ${method === "CARD" && "text-indigo-500"} w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24`} viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="font-medium">CARDS</span>
                            </div>
                        </div>
                        <div onClick={() => ChangePaymentMethod("UPI")} class="p-1 w-full cursor-pointer">
                            <div class="bg-gray-100 rounded flex p-4  items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                    class={`  text-gray-500 ${method === "UPI" && "text-indigo-500"} w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24`} viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="font-medium">UPI</span>
                            </div>
                        </div>

                    </div>
                    <div className="space-y-6 w-full flex justify-center items-center">
                        {/* QR Code Payment Option */}
                        {method == "QR" && <div className="flex flex-col items-center  p-4 rounded-md w-4/5">
                            <h2 className="text-lg font-medium text-gray-800 mb-2">Pay with QR Code</h2>
                            <div className="bg-gray-200 p-4 rounded-md mb-2">
                                <img src="https://i.pinimg.com/736x/a8/69/40/a86940a4ed8a69539b341f3c414c47b3.jpg" alt="QR Code" className="w-40 h-40" />
                            </div>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                                Pay Now
                            </button>
                        </div>}

                        {/* Credit/Debit Card Option */}
                        {method == "CARD" && <div className="flex flex-col items-center p-4 rounded-md w-4/5">
                            <h2 className="text-lg font-medium text-gray-800 mb-2">Pay with Card</h2>
                            <form className="w-full">
                                <input
                                    type="text"
                                    placeholder="Card Number"
                                    className="w-full mb-2 p-2 border border-gray-300 rounded-md"
                                />
                                <div className="flex space-x-2 mb-2">
                                    <input
                                        type="text"
                                        placeholder="MM/YY"
                                        className="flex-1 p-2 border border-gray-300 rounded-md"
                                    />
                                    <input
                                        type="text"
                                        placeholder="CVV"
                                        className="flex-1 p-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200 w-full"
                                >
                                    Pay Now
                                </button>
                            </form>
                        </div>}

                        {/* UPI Payment Option */}
                        {method == "UPI" && <div className="flex flex-col items-center p-4 rounded-md w-4/5">
                            <h2 className="text-lg font-medium text-gray-800 mb-2">Pay with UPI</h2>
                            <input
                                type="text"
                                placeholder="Enter UPI ID"
                                className="w-full mb-2 p-2 border border-gray-300 rounded-md"
                            />
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                                Pay Now
                            </button>
                        </div>}
                    </div>
                </div>
                <div className="mt-6 text-sm text-gray-500 text-center">
                    <p>
                        Need help?{' '}
                        <a href="#" className="text-blue-500 hover:underline">
                            Contact Support
                        </a>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Payment