import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle,FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="pl-40 pt-7">
      <div className="h-[700px] w-[600px] bg-green-300 items-center ">
        <div className="sticky top-0">
        <button className="btn btn-circle">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
{/* <button className="btn btn-circle btn-outline">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button> */}
        <h1 className=" text-center font-semibold border-b-8 ">
          log in or sign up
        </h1>
        </div>
        <h1 className="font-bold text-black text-3xl py-8 px-8">
          Welcome To Airbnb
        </h1>

        <div className=" pl-[100px]">
          <PhoneInput
            placeholder="phone number"
            inputStyle={{ width: "410px", height: "50px", fontSize: "17px" }}
          />
        </div>
        <h1 className="text-white pt-3 pl-2">
          We 'll call or text you to confirm your number. Standard message and
          data rates <span className="text-slate-300">Privacy Policy</span> 
        </h1>
        <div className="pt-4 pl-2 pr-2">
        <button className="btn btn-block">Continue</button>
           <p className="text-center pt-3 ">or</p>
        
        </div>
        <div className="mb-4 pl-2 pr-2 ">
          <div>
        <button className="btn btn-block mb-5  "> <FaFacebook />
          Continue with facebook</button>
        </div>
        <button className="btn btn-block mb-5 " 
        > <FaGoogle />Continue with Google</button>
        <button className="btn btn-block mb-5"><FaApple />Continue with Apple </button>
        <button className="btn btn-block mb-5"> <MdEmail />Continue with email</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
