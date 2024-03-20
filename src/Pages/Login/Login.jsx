import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import loginimage from "../../assets/Images/login.gif"
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.form?.pathname || "/";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data)

    signIn(data.email, data.password)
      .then(result => {
        toast.success('User logged in successfully');
        navigate(from, { replace: true })
        reset();
      })
      .catch(error=>{
          
        if (error.code === 'auth/invalid-login-credentials') {
            toast.error('Invalid email or password. Please try again.')
          } else if (error.code === 'auth/user-not-found') {
           toast.error('User not found. Please check your email.')
          } 
    })
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        toast.success('User logged in successfully');
        navigate(from, { replace: true })
      })
      .catch(error=>{
        toast.error(error.message)
    })
      
  }


  return (
    <div className="flex justify-evenly items-center mt-28 flex-col lg:flex-row">
      <img src={loginimage} alt="" />
      <div className="md:w-[28rem]">
        <h1 className="text-gray-700 text-center text-[2.5rem] font-semibold">Sign In</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          <p className="text-[#444444ce] mt-5 text-xl font-semibold">Email</p>

          <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="email" name="email" id="" placeholder="Type here" {...register("email", { required: true })} />

          <p className="text-[#444444ce]  text-xl mt-4 font-semibold">Password</p>

          <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="password" name="password" id="" placeholder="Enter your password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} />

          {errors.password?.type === 'minLength' && <span>Password must be 6 character</span>}


          <input className="w-full mt-5 h-[3.5rem] btn btn-neutral border-none bg-[#ADA7FF] text-white text-xl font-bold" type="submit" id="" value="Sign In" />

          <p className="text-gray-600 mt-5 text-center text-xl font-medium">Do not have an account? <Link to='/signup'><span className="font-bold">Sign Up</span></Link></p>

          <p className="text-[#444] mt-5 text-xl font-medium text-center">Or sign in with</p>

          <div className="flex items-center justify-center gap-14 mt-5">

            <div onClick={handleGoogleSignIn} className="w-[18.25rem] rounded-3xl bg-[#ADA7FF] cursor-pointer btn-neutral h-[3.25rem]  flex gap-2 justify-center items-center ">
              <FaGoogle className="text-white text-2xl" />
              <p className="text-white text-lg font-bold">Continue With Google</p>
            </div>


          </div>
        </form>


      </div>

      
    </div>
  );
};

export default Login;