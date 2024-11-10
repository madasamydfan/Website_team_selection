import Button from '../components/Button'
export default function Loginbox(){
    return (
        <>
        <div className='Formcontainer'>
        <div className="squarebox"></div>
        <form action="">
            <input type="text" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <Button buttonContent="Login"></Button>
        </form>
        </div>
        </>
    );
}