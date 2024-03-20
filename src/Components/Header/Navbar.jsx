import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import avatar from "../../assets/Images/avatar.jpg"

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate();
    const handlelogOut = () => {
        logOut()
        navigate('/')
    }
    return (
        <div className="px-[10%] h-fit pt-4 sticky top-0 bg-white z-50">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a className="text-lg font-medium text-gray-600">Home</a></li>
                            <li><a className="text-lg font-medium text-gray-600">Pet Listing</a></li>
                            <li><a className="text-lg font-medium text-gray-600">Donation Campains</a></li>
                        </ul>
                    </div>
                    <a href="/" className="text-xl cursor-pointer"><img src="../../../src/assets/Logo/Logo.png" alt="website logo" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'><a className="text-lg font-medium text-gray-600 dosis">Home</a></Link></li>
                        <li><Link to='/petlisting'><a className="text-lg font-medium text-gray-600 dosis">Pet Listing</a></Link></li>
                        <li><Link to='/donationcamp'><a className="text-lg font-medium text-gray-600 dosis">Donation Campains</a></Link></li>
                    </ul>
                </div>

                
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div onClick={() => setOpen(!isOpen)} className="w-10 rounded-full">
                                        {
                                            user?.photoURL ? <img alt="" src={user?.photoURL} />
                                            :
                                            <img alt="Tailwind CSS Navbar component" src={avatar} />
                                            
                                        }
                                        
                                    </div>
                                </div>
                                <ul tabIndex={0} className={`mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-36 ${isOpen ? '' : 'hidden'}`}>
                                    <li><a className="text-lg text-gray-700">Dashboard</a></li>
                                    <li><a onClick={handlelogOut} className="text-lg text-gray-700">Logout</a></li>
                                </ul>
                            </div>
                            :
                            <div className="space-x-4">
                                <Link to='/login'><button className="btn btn-outline bg-[#ADA7FF] text-white font-medium rounded-[25px] px-8 text-lg">Login</button></Link>

                                <Link to='/signup'><button className="btn btn-outline border-[#ADA7FF] font-medium rounded-[25px] px-8 text-lg">Register</button></Link>
                            </div>

                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;