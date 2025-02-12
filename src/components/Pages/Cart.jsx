import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../Features/Cart";
import { Link } from "react-router";
import ProgressBar from "../ProgressBar/ProgressBar"

const Cart = () => {
  const dispatch = useDispatch();

  const [step, setStep] = useState(0)
  // Access the cart items from Redux state
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(step);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + parseFloat(item.productPrice) * (item.quantity || 1);
  }, 0);
  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };
  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  const [method, setMethod] = useState("UPI")

  const ChangePaymentMethod = (methodName) => {
    setMethod(methodName)
  }

  const cartFormsubmit = () => {
    setStep((prev) => prev + 1);
  }

  const onPaymentformSubmit = () => {

    setStep((prev) => prev + 1);

  }
  // const onformSubmit = () => {

  //   setEditingAdd(!isEditingAdd)

  // }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h2>
        <p className="text-gray-500 mt-2">Add some items to see them here!</p>
        <Link to="/"><button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-700">
          Shop Now
        </button></Link>
      </div>
    );
  }

  // Delivery Form Handle
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Delivery Address:", formData);
  };

  const [isEditingAdd, setEditingAdd] = useState(false)

  return (<div className=" flex justify-center mx-5 flex-col">

    <div className="w-full px-5" ><ProgressBar step={step} setStep={setStep} /></div>
    <div className="flex justify-center flex-col w-full py-10">
      {/* Cart */}
      {step == 0 && <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Your Shopping Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow"
              >
                {/* Image and Name */}
                <div className="flex items-center space-x-4">
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-20 h-20 rounded-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">{item.productName}</h3>
                    <p className="text-gray-600 mt-1">Rs. {item.productPrice}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-gray-300 px-2 py-1 rounded-md text-sm font-bold hover:bg-gray-400"
                    onClick={() => handleRemove(item.id)}
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity || 1}</span>
                  <button
                    className="bg-gray-300 px-2 py-1 rounded-md text-sm font-bold hover:bg-gray-400"
                    onClick={() => handleAdd(item)}
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  className="text-red-600 font-semibold hover:text-red-800 transition-colors"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-md bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>Rs. {totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Rs. 50.00</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-800">
                <span>Total</span>
                <span>Rs. {(totalPrice + 50).toFixed(2)}</span>
              </div>
            </div>
            <button onClick={cartFormsubmit} className="mt-6 w-full bg-green-500 text-white py-3 rounded-md shadow-md font-bold hover:bg-green-600 transition-all">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>}

      {/* Address  */}

      {step == 1 &&
        (isEditingAdd === true ?
          (
            <div className="flex w-full items-center justify-center min-h-screen">
              <div className=" mix-w-xl w-2/3  mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Edit Address</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Mobile No
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                      placeholder="phone"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700">
                      Pin Code
                    </label>
                    <input
                      type="text"
                      id="pinCode"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                      placeholder="pinCode"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="fullAddress" className="block text-sm font-medium text-gray-700">
                      Address (House No, Building, Street, Area)
                    </label>
                    <textarea
                      id="fullAddress"
                      name="fullAddress"
                      value={formData.fullAddress}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                      placeholder="fullAddress"
                      rows="3"
                      required
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="locality" className="block text-sm font-medium text-gray-700">
                      Locality / Town
                    </label>
                    <input
                      type="text"
                      id="locality"
                      name="locality"
                      value={formData.locality}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                      placeholder="locality"
                      required
                    />
                  </div>

                  <div className="flex space-x-4 mb-6">
                    <div className="w-1/2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                        placeholder="city"
                        required
                      />
                    </div>
                    <div className="w-1/2">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                        placeholder="state"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white text-lg py-3 px-5 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-offset-2 transition duration-200 ease-in-out"
                    onClick={onformSubmit}
                  >
                    Save Address
                  </button>
                </form>
              </div>
            </div>
          ) :
          <div className="w-full max-w-xl my-4 mx-auto">
            <div className=" w-full p-4">
              <div className="flex justify-between" >
                <h1 className="font-bold text-black text-lg">Saved Address</h1>
                <button className="shadow-md rounded-md p-2 border">+ ADD NEW ADDRESS</button>
              </div>
              <div className=" shadow-md rounded-md mb-4">
                <div className="border-b border-gray-400 p-4" >
                  <h2 className="font-bold text-gray-700">{formData.name == "" ? "Ashok Kumar Mahto" : formData.name}</h2>
                  <p className="" >{formData.locality == "" ? "Sukurhuttu" : formData.locality}</p>
                  <p className="" >{formData.city == "" ? "Ranchi" : formData.city}</p>
                  <p className="" >{formData.city == "" ? "Ranchi" : formData.city}-{formData.pinCode == "" ? "834006" : formData.pinCode}</p>
                  <p className="" >{formData.state == "" ? "Jharkhand" : formData.state}</p>
                  <p className="py-3" >Mobile:{formData.phone == "" ? "8210782716" : formData.phone}</p>
                </div>
                <div className="flex justify-around py-3">
                  <button onClick={() => setEditingAdd(!isEditingAdd)} className="text-blue-900 font-bold " >EDIT</button>
                  <button className="text-blue-900 font-bold " >REMOVE</button>
                </div>
              </div>
              <button onClick={() => { setStep((prev) => prev + 1); }} className="bg-green-600 text-white font-bold px-6 py-2 rounded-md hover:bg-green-700 transition duration-200 w-full">Deliver to this address</button>

            </div>
          </div>
        )
      }
      {/* Payment */}
      {step == 2 && <div className=" flex justify-center max-h-screen ">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-lg">
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
                <button onClick={onPaymentformSubmit} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200">
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
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200 w-full" onClick={onPaymentformSubmit}
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
                <button onClick={onPaymentformSubmit} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200">
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

      </div>}

      {/* Confirmation page  */}
      {step == 3 &&
        <div className="flex  justify-center">
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-green-600 mb-4 text-center">
              Order Confirmed! 🎉
            </h1>
            <p className="text-gray-700 text-center mb-6">
              Your food order has been confirmed and will be delivered in a few minutes. Thank you for ordering with us!
            </p>
            <div className="flex justify-center mb-6">
              <img
                src="data:image/jpeg;base64,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"
                alt="Delivery Illustration"
                className="rounded-full border-2 border-green-500"
              />
            </div>
            <button
              onClick={() => alert("Track your order!")}
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg text-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300"
            >
              Track Order
            </button>
          </div>
        </div>
      }
    </div>
  </div>
  );
};

export default Cart;
