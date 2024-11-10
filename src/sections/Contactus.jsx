
import { FaFacebook } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
export default function Contactus(){
    return (
        <>
        <h2 className='Contactusheading'>Contact us</h2>
        <div className='Contactus'>
        <div className="Para-Content-Contactus">
        <p>This is the sample text i have been using for this This is the sample text i 
        have been using for thisThis is the sample text i have been using for this this is the sample text i have been using for this This is the sample text i 
        have been using for this</p>
        </div>
        <div>
        <div className='Contact-details'>
            <p>Phone Number : 722000771</p>
            <p>Email : abc@gmail.com</p>
        </div>
        <div className='LOGOS'>
            <FaFacebook></FaFacebook>
            <SlEnvolopeLetter></SlEnvolopeLetter>
            <FaInstagram></FaInstagram>
        </div>
        </div>
        </div>
            </>
    );
}