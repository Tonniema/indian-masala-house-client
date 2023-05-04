import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import Active_Link from '../../../routes/Active_Link/Active_Link';

const Header = () => {
    const { user , Log_Out} = useContext(AuthContext)
    
    const handle_logout = () => {

        Log_Out() // ʙᴇʜɪɴᴅ ᴛʜᴇ sᴇᴇɴ Log_Out = signOut(auth) ... .. . so,
        .then(() => {})

        .catch((error) => { console.log(error)});
    }

  const [navbar, setNavbar] = useState(false);

    return (
        <div>
            <nav className="w-full bg-white shadow">
                <div className="justify-between  px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            
                            <a href="">
                                <h2 className="text-2xl font-bold">indian<span className='text-amber-500'>Masala</span>.<span className='text-stone-500'>House</span> </h2>
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div
                            className={`flex justify-cent pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`} >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-gray-600 hover:text-orange-500">
                                    <Active_Link to="/">Home</Active_Link>
                                </li>
                                <li className="text-gray-600 hover:text-orange-500">
                                    <Active_Link to="/About">About Us</Active_Link>
                                </li>
                                <li className="text-gray-600 hover:text-orange-500">
                                    <Active_Link to="/Blog">Blog</Active_Link>
                                </li>
                                 {/* {user ? <li className="text-gray-600 hover:text-blue-600">
                                    <button >Logout</button>
                                </li> : <li className="text-gray-600 hover:text-blue-600">
                                    <Link to="/Login">Login</Link>
                                </li>} */}
                                 {/*{user ? <User_Info></User_Info> : <li className="text-gray-600 hover:text-blue-600">
                                    <Link to="/Register">Register</Link>
                                </li>}
                                {!user && <li className="text-gray-600 hover:text-blue-600">
                                    <Link to="/OTP">OTP</Link>
                                </li>} */}
                            </ul>
                        </div>
                    </div>


                    <div>
                        <div
                            className={`flex justify-cent pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`} >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <img className='h-12 w-12 rounded-full' src={user?.photoURL} alt="" title={user?.displayName}/>
                                {
                                  !user ?
                                  <li className="text-gray-600 hover:text-blue-600">
                                  <button className='text-center text-[#403f3f] font-[700] text-[.911em] md:text-[1em] hover:bg-yellow-400 hover:text-red-500 px-1 py-1 rounded-sm duration-200'><Link to='/Login'>Login</Link></button>
                              </li>

                                    :
                                
                                <li onClick={handle_logout} className="text-gray-600 hover:text-blue-600">
                                <button className='text-center text-[#403f3f] font-[700] text-[.911em] md:text-[1em] hover:bg-yellow-400 hover:text-red-500 px-1 py-1 rounded-sm duration-200'>Logout</button>
                            </li>
                                }
                                
                            </ul>
                        </div>
                    </div>


                </div>
            </nav>
        </div>
    );
};

export default Header;