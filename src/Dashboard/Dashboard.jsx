import { Link, NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { MdOutlineLogout } from "react-icons/md";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Navbar from "../Components/Header/Navbar";



const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const { user, logOut } = useContext(AuthContext)
    const handlelogOut = () => {
        logOut()
    }
    return (
        <div>
            <Navbar/>
            <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <label htmlFor="my-drawer-2" className="btn bg-[#ADA7FF] border-none text-white w-full btn-primary drawer-button lg:hidden">Open Dashboards</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className=" p-4 w-80 min-h-[90vh] fixed bg-base-200 text-base-content bg-gradient-to-r from-[#ada7ff20]">
                    <li className="flex flex-col justify-center items-center">
                        {
                            user?.photoURL ? <img className="w-[10rem] border-2 border-[#ADA7FF]  h-[9rem] rounded-[50%]" src={user?.photoURL} alt="" />
                                :
                                <img className="w-[10rem]  h-[9rem] rounded-[50%]" src="https://i.ibb.co/b7TTqxP/avatar.png" alt="" />
                        }
                        <h1 className="text-xl text-center mt-4 font-semibold">Welcome, <span className="text-[#ADA7FF] text-left">{user?.displayName}</span> </h1>
                    </li>

                    {
                        isAdmin ? <>

                            <li><NavLink className={({ isActive }) =>
                                isActive ? 'font-bold btn w-full text-white text-lg bg-[#ADA7FF] hover:text-black hover:bg-white mt-8' : 'font-semibold text-xl btn btn-outline border-[#ADA7FF] hover:text-black w-full mt-8 border-2 hover:bg-white hover:rounded-tr-3xl'
                            } to="/dashboard/teacher-request">Teacher Request</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                isActive ? 'font-bold btn w-full text-white text-lg bg-[#ADA7FF] hover:text-black hover:bg-white mt-8' : 'font-semibold text-xl btn btn-outline border-[#ADA7FF] hover:text-black w-full mt-8 border-2 hover:bg-white hover:rounded-tr-3xl'
                            } to="/dashboard/users">Users</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                isActive ? 'font-bold btn w-full text-white text-lg bg-[#ADA7FF] hover:text-black hover:bg-white mt-8' : 'font-semibold text-xl btn btn-outline border-[#ADA7FF] hover:text-black w-full mt-8 border-2 hover:bg-white hover:rounded-tr-3xl'
                            } to="/dashboard/classes">All Classes</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                isActive ? 'font-bold btn w-full text-white text-lg bg-[#ADA7FF] hover:text-black hover:bg-white mt-8' : 'font-semibold text-xl btn btn-outline border-[#ADA7FF] hover:text-black w-full mt-8 border-2 hover:bg-white hover:rounded-tr-3xl'
                            } to="/dashboard/admin-profile">Profile</NavLink></li>

                        </>



                            :
                            <>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'font-medium btn w-full text-white text-lg bg-[#ADA7FF] hover:text-black hover:bg-white mt-8' : 'font-medium text-lg btn btn-outline border-[#ADA7FF] hover:text-black w-full mt-8 border-2 hover:bg-white hover:rounded-tr-3xl'
                                } to="/dashboard/add-a-pet">Add a pet</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'font-medium btn w-full text-white text-lg bg-[#ADA7FF] hover:text-black hover:bg-white mt-3' : 'font-medium text-lg btn btn-outline border-[#ADA7FF] hover:text-black w-full mt-3 border-2 hover:bg-white hover:rounded-tr-3xl'
                                } to="/dashboard/my-added-pet">My added pets</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'font-medium btn w-full text-white text-lg bg-[#ADA7FF] hover:text-black hover:bg-white mt-3' : 'font-medium text-lg btn btn-outline border-[#ADA7FF] hover:text-black w-full mt-3 border-2 hover:bg-white hover:rounded-tr-3xl'
                                } to="/dashboard/student-profile">Adoption Request
                                </NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'font-medium btn w-full text-white text-lg bg-[#ADA7FF] hover:text-black hover:bg-white mt-3' : 'font-medium text-lg btn btn-outline border-[#ADA7FF] hover:text-black w-full mt-3 border-2 hover:bg-white hover:rounded-tr-3xl'
                                } to="/dashboard/adddonationcamp">Create Donation Campaign
                                </NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'font-medium btn w-full text-white text-lg bg-[#ADA7FF] hover:text-black hover:bg-white mt-3' : 'font-medium text-lg btn btn-outline border-[#ADA7FF] hover:text-black w-full mt-3 border-2 hover:bg-white hover:rounded-tr-3xl'
                                } to="/dashboard/mydonationcamp">My Donation Campaigns

                                </NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'font-medium btn w-full text-white text-lg bg-[#ADA7FF] hover:text-black hover:bg-white mt-3' : 'font-medium text-lg btn btn-outline border-[#ADA7FF] hover:text-black w-full mt-3 border-2 hover:bg-white hover:rounded-tr-3xl'
                                } to="/dashboard/student-profile">My Donations
                                </NavLink></li>

                            </>
                    }


                    {/* <div className="divider"></div>

                
                    <Link to='/login' onClick={handlelogOut}><li className="absolute flex items-center gap-2 text-2xl font-bold bottom-8 left-8"><MdOutlineLogout /> Logout</li></Link> */}



                </ul>

            </div>
        </div>
        </div>
    );
};

export default Dashboard;