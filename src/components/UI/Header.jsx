import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { changeTheme } from "../../Features/Theme"
import { logOut } from '../../Features/Login';
import { toast } from 'react-toastify';

const Header = () => {

  const [toggle,setToggle]=useState(false)

  const cartList = useSelector((state) => state.cart.cartItems);
  const theme = useSelector((state) => state.Themes.Theme);
  const credential = useSelector((state) => state.Login.Credentials);
  const dispatch = useDispatch()
  console.log(theme);

  const notify = () => toast("Logged off successfully");


  const Logout = () => {

    alert("Are you sure you want to logOut")

    dispatch(logOut())
    notify()
  }

  const navigate = useNavigate()

  const LogIn = () => {
    navigate('/login')
  }



  const changeThemes = (theme) => {
    dispatch(changeTheme({ Theme: theme }))
  }
  const headermenuHandler=()=>{
    setToggle(!toggle)
  }

  return (
    <header className='font-[sans-serif] min-h-[60px] tracking-wide relative z-50'>
      <section className="bg-[#004d66]  min-h-[40px] px-4 py-2 sm:px-10 flex items-center">
        <button type="button" className="text-white text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" className="mr-3 inline-block"
            viewBox="0 0 482.6 482.6">
            <path
              d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
              data-original="#000000"></path>
          </svg>
          +180-548-2588
        </button>
        <span className="border-l h-3 mx-6 max-sm:hidden"></span>
        <button type="button" className="text-white text-sm max-sm:my-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" className="mr-3 inline-block"
            viewBox="0 0 479.058 479.058">
            <path
              d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
              data-original="#000000"></path>
          </svg>
          info@example.com
        </button>
        {credential.isLoggedIn === false ? <div className="ml-auto text-white flex">
          <p onClick={LogIn} className="text-white text-sm mr-1 cursor-pointer">Sign In</p>
          /
          <p onClick={LogIn} className="text-white text-sm ml-1 cursor-pointer">Sign Up</p>
        </div> : <div className="ml-auto text-white"><p onClick={Logout} className="text-white text-sm mr-1 cursor-pointer">Log out</p></div>}
      </section>

      <div className='flex flex-wrap items-center justify-between py-3 px-4 sm:px-10 bg-[#151d20] lg:gap-y-4 gap-y-6 gap-x-4 dark:bg-gray-950'>
        <a href="javascript:void(0)"><img src="https://www.freepnglogos.com/uploads/logo-ifood-png/ifood-food-logo-png-red-transparent-10.png" alt="logo" className='sm:w-[100px] w-[100px]' />
        </a>

        <div id="collapseMenu"
          className={` ${!toggle && "hidden"} lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`}>
          <ul
            className='lg:!flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-[#151d20] max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            {/* <li className='mb-6 hidden max-lg:block'>
              <NavLink to="/"><img src="https://readymadeui.com/readymadeui-white.svg" alt="logo"
                className='w-36' />
              </NavLink>
            </li> */}
            <li
              className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
              <NavLink to="/" className={({ isActive }) =>
                `block text-[15px] font-medium ${isActive ? 'text-red-500' : 'text-white'
                }`
              }>Home</NavLink>
            </li>
            <li
              className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
              <NavLink
                to="/catogories"
                className={({ isActive }) =>
                  `block text-[15px] font-medium ${isActive ? 'text-red-500' : 'text-white'
                  }`
                }
              >
                Categories
              </NavLink>
            </li>
            {credential.isLoggedIn && <li
              className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
              <NavLink to="/ingredients" className={({ isActive }) =>
                `block text-[15px] font-medium ${isActive ? 'text-red-500' : 'text-white'
                }`
              }>ingredients</NavLink>
            </li>}
            <li
              className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
              <NavLink to="/about" className={({ isActive }) =>
                `block text-[15px] font-medium ${isActive ? 'text-red-500' : 'text-white'
                }`
              }>About Us</NavLink>
            </li>

          </ul>
          <button onClick={headermenuHandler} id="toggleClose" className={`${!toggle && "hidden"} fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>
        </div>

        <div className='flex items-center max-sm:ml-auto'>
          <ul className="flex space-x-4">
            <li onClick={() => changeThemes(theme)} className='p-2 cursor-pointer hover:text-blue-700 flex items-center justify-center bg-slate-50  rounded-full' >{theme == "dark" ?
              <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clip-rule="evenodd" />
              </svg>
              :
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clip-rule="evenodd" />
              </svg>
            }
            </li>
            {credential.isLoggedIn && <li
              className="relative p-2 bg-white rounded-full ">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6  cursor-pointer fill-black"
                viewBox="0 0 512 512">
                <path
                  d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-66.869 0-127.037-29.202-168.452-75.511C113.223 338.422 178.948 290 256 290c-49.706 0-90-40.294-90-90s40.294-90 90-90 90 40.294 90 90-40.294 90-90 90c77.052 0 142.777 48.422 168.452 116.489C383.037 452.798 322.869 482 256 482z"
                  data-original="#000000" />
              </svg>
            </li>}
            {credential.isLoggedIn && <li
              className="relative p-2 lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
              <NavLink to="/cart">
                <span className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                    className="cursor-pointer fill-white inline-block" viewBox="0 0 512 512">
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"></path>
                  </svg>
                  <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{cartList.length}</span>
                </span>
              </NavLink>
            </li>}
          </ul>

         {!toggle && <button onClick={headermenuHandler} id="toggleOpen" className={`${"lg:hidden"} ml-6`}>
            <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>}
        </div>
      </div>
    </header>
    // <div className=' dark:bg-slate-950 shadow-lg'>
    //   <nav className='flex justify-between px-7 items-center py-4 dark:text-white'>
    //     <div>
    //       <NavLink to="/" ><img width="100" src="https://www.freepnglogos.com/uploads/logo-ifood-png/ifood-food-logo-png-red-transparent-10.png" alt="LOGO" /></NavLink>
    //     </div>
    //     <ul className='flex justify-around font-semibold text-lg gap-5'>
    //       {/* <NavLink className={(isActive) => ` px-5 cursor-pointer hover:text-blue-700 hover:scale-105 ${!isActive ? "text-red-800" : "text-black "}`} to="/"><li className={(isActive) => `px-5 cursor-pointer hover:text-blue-700 hover:scale-105 ${isActive && "text-red-800"}`}>Home</li></NavLink> */}
    //       {credential.isLoggedIn &&
    //         <NavLink className={(isActive) => `px-5 cursor-pointer hover:text-blue-700 hover:scale-105 ${!isActive ? "text-red-800" : "text-black dark:text-white flex items-center"}`} to="/catogories"><li>Catogories</li></NavLink>}
    //       {credential.isLoggedIn &&
    //         <NavLink className={(isActive) => `px-5 cursor-pointer hover:text-blue-700 hover:scale-105 ${!isActive ? "text-red-800" : "text-black dark:text-white flex items-center "}`} to="/ingredients"><li >ingredients</li></NavLink>
    //       }
    //       <NavLink className={(isActive) => `px-5 cursor-pointer hover:text-blue-700 hover:scale-105 ${!isActive ? "text-red-800" : "text-black dark:text-white flex items-center "}`} to="/about"><li >about us</li></NavLink>
    //       {credential.isLoggedIn &&
    //         <NavLink className={(isActive) => `px-5 cursor-pointer hover:text-blue-700 hover:scale-105  ${!isActive ? "text-red-800" : "text-black  dark:text-white flex items-center"}`} to="/cart"><li className='flex items-center justify-center' ><FaShoppingCart /><span className='p-2 text-green-900 font-bold '>{cartList.length}</span></li></NavLink>
    //       }
    //       <li onClick={() => changeThemes(theme)} className='px-5 cursor-pointer hover:text-blue-700 hover:scale-105 flex items-center justify-center bg-gray-500 dark:bg-gray-300  rounded-md' >{theme == "dark" ? <MdSunny /> : <FaMoon />}</li>
    //       {credential.isLoggedIn==true?
    //         <li onClick={Logout} className='flex items-center justify-center bg-red-600 text-white rounded-md px-2 cursor-pointer' ><span className='p-2 font-bold '>Logout</span><span><TbLogout /></span></li>:
    //         <li onClick={LogIn} className='flex items-center justify-center bg-red-600 text-white rounded-md px-2 cursor-pointer' ><span className='p-2 font-bold '>Login</span><span><TbLogout /></span></li>
    //       }
    //     </ul>
    //   </nav>
    // </div>
  )
}

export default Header