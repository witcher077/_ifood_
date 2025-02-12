import React from "react";

const About = () => {
  const merchandise = [
    { id: 1, name: "T-shirt", price: "Rs. 499", img: "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 2, name: "Coffee Mug", price: "Rs. 299", img: "https://images.unsplash.com/photo-1520031473529-2c06dea61853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwbXVnfGVufDB8fDB8fHww" },
    { id: 3, name: "Tote Bag", price: "Rs. 399", img: "https://images.unsplash.com/photo-1548863227-3af567fc3b27?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  const customers = [
    { id: 1, name: "John Doe", location: "New York", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxwcm9maWxlfGVufDB8fDB8fHww" },
    { id: 2, name: "Jane Smith", location: "London", img: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE0fHxwcm9maWxlfGVufDB8fDB8fHww" },
    { id: 3, name: "Amit Kumar", location: "Delhi", img: "https://images.unsplash.com/photo-1642978276901-29ef66b39ebc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc0fHxwcm9maWxlfGVufDB8fDB8fHww" },
  ];

  return (
    <div className="container mx-auto p-6 space-y-12 dark:bg-gray-900">
      <header className="text-center space-y-4 ">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">About Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-200">
          Welcome to our food app, where we bring flavors from around the world straight to your doorstep.
        </p>
      </header>

      <section className="bg-gray-50 p-6 rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-gray-100">Who We Are</h2>
        <p className=" italic text-blue-900  dark:text-purple-500">
          Our food app is designed to connect food lovers with the best cuisines, fresh ingredients, and
          world-class chefs. Whether you’re craving a gourmet meal or a quick bite, we’ve got you covered.
          We also offer exclusive merchandise for our food enthusiasts and celebrate our loyal customers.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 dark:text-gray-200">Our Merchandise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {merchandise.map((item) => (
            <div
              key={item.id}
              className="p-4 border rounded-lg shadow-md bg-white flex flex-col items-center text-center dark:bg-gray-900"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">{item.name}</h3>
              <p className="text-gray-600 mb-2 dark:text-green-600">{item.price}</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">Our Regular Customers</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="flex flex-col items-center text-center space-y-3 bg-gray-50 p-4 rounded-lg shadow-md w-48 dark:bg-gray-800"
            >
              <img
                src={customer.img}
                alt={customer.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <h3 className="font-semibold text-lg text-gray-800 dark:text-green-700">{customer.name}</h3>
              <p className="text-gray-600 dark:text-gray-200">{customer.location}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center bg-green-500 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
        <p className="mb-4">
          Become a part of our growing community of food lovers. Download the app now and enjoy exclusive
          benefits, discounts, and more!
        </p>
        <button className="bg-white text-green-500 px-6 py-2 rounded-md font-bold hover:bg-gray-100">
          Download App
        </button>
      </section>
    </div>
  );
};

export default About;
