import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import PetListing from "../Pages/Pet Listing/PetListing";
import PetListingDetails from "../Pages/Pet Listing Details/PetListingDetails";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import DonationCampaign from "../Pages/Donation Camp/DonationCampaign";
import DonationCampaignDetails from "../Pages/Donation Camp/Donation Campaign Details/DonationCampaignDetails";
import Dashboard from "../Dashboard/Dashboard";
import AddAPet from "../Dashboard/UserDashboard/Add a Pet/AddAPet";
import MyAddedPet from "../Dashboard/UserDashboard/My Added Pet/MyAddedPet";
import UpdatedPet from "../Dashboard/UserDashboard/Updated Pet/UpdatedPet";
import AddDonationCamp from "../Dashboard/UserDashboard/Donation Campaign/AddDonationCamp";
import ViewMyDonationCamp from "../Dashboard/UserDashboard/Donation Campaign/ViewMyDonationCamp";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/petlisting",
        element: <PetListing />
      },
      {
        path: "/petlistingdetsils/:id",
        element: <PetListingDetails />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/donationcamp',
        element: <DonationCampaign />
      },
      {
        path: '/donationcampdetails',
        element: <DonationCampaignDetails />
      }

    ]
  },

  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'add-a-pet',
        element: <AddAPet/>
      },
      {
        path: 'my-added-pet',
        element: <MyAddedPet/>
      },
      {
        path: 'update-pet/:id',
        element: <UpdatedPet/>
      },
      {
        path: 'adddonationcamp',
        element: <AddDonationCamp/>
      },
      {
        path: 'mydonationcamp',
        element: <ViewMyDonationCamp/>
      }
      // {
      //   path: 'add-a-pet',
      //   element: <StudentDashboard />
      // },
      // {
      //   path: 'enroll-classes',
      //   element: <MyEnrollClasses />,
      //   loader: () => fetch('https://letsyourskillupserver.vercel.app/addclasses/adminroute/approved')
      // },
      // {
      //   path: 'enroll-classes/:id',
      //   element: <EnrollClassDetails />,
      //   loader: ({ params }) => fetch(`https://letsyourskillupserver.vercel.app/addclasses/adminroute/approved/${params.id}`)
      // },
      // {
      //   path: 'student-profile',
      //   element: <StudentProfile />
      // },

      // //admin dashbaord
      // {
      //   path: 'users',
      //   element: <AdminRoutes><AllUsers /></AdminRoutes>
      // },
      // {
      //   path: 'teacher-request',
      //   element: <AdminRoutes><TeacherRequest /></AdminRoutes>
      // },
      // {
      //   path: 'classes',
      //   element: <AdminRoutes><AllClassesAdmin /></AdminRoutes>
      // },
      // {
      //   path: 'classes/:id',
      //   element: <AdminClassDetails />,
      //   loader: ({ params }) => fetch(`https://letsyourskillupserver.vercel.app/addclasses/adminroute/approved/${params.id}`)
      // },
      // {
      //   path: 'admin-profile',
      //   element: <AdminRoutes><AdminProfile /></AdminRoutes>

      // },

    ]
  }
]);

export default router;