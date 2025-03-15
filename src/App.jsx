

 
 import twitter from "../src/assets/twitter.jpg"
 import instagram from "../src/assets/instagram.jpg"
 import facebook from "../src/assets/facebook.jpg"
 import googleImage from '../src/assets/google.png'
 import login from '../src/assets/login.png'
 
function App() {


  return (
    <>
    <div className=" gap-3 flex justify-between p-4 ">
    <div>
       <img src={login} alt="login"/>
      </div>
      <div className="my-20 max-w-[600px] pl-5 border-2 p-5 ">
    
     <h1 className="text-6xl font-bold pb-10 text-center">
    Log-In
  </h1>
   
      <div>
       
      <div className='bg-white'>
    <p className='text-xl front-bold'> User Name or Email:</p>
    <input type="text"placeholder="User Name or Email" className='border-2 rounded-md h-[40px] w-[300px] font-blod text-gray-500 text-xl p-3' />
    </div>
    
    <div className='bg-white'>
    <p className='text-xl front-bold'> Password:</p>
    <input type="text"placeholder="Password" className='border-2 rounded-md h-[40px] w-[300px] font-blod  text-gray-500 text-xl p-3' />
    </div>
    
    <div className='bg-white'>
   <a href="htttp://www.forget password.com"target="block">
   <p className='text-right front-bold py-2'> Forget Password?</p>
   </a>
    </div>
      </div>
      
    <div className="flex justify-center">
   <a href="https://www.login.com" target="blank">
   <button className="bg-blue-300 p-3 text-black border-2 rounded-md w-[150px] h-[50px] ">
    Log-in
  </button>
   </a>
      </div>
      
      <div className="my-10"> 
      <p className="text-center front-bold py-3">Or Sign Up Using</p>
     <div className="flex justify-center">
      <a href="https://www.twitter.com" target="blank">
      <img className=" h-8 w-8" src= {twitter} alt="twitter" />
      </a>
     <a href="https://www.google.com"target="blank"> 
     <img className="h-9 w-9" src={googleImage} alt="googleImage"/>
     </a>
    
      <a href="https://www.facebook.com" target="blank">
      <img className=" mx-2 h-8 w-8" src= {facebook} alt="facebook" />
      </a>
      <a href="https://www.instagram.com" target="blank">
        <img className=" h-8 w-8" src= {instagram} alt="instagram" />
      </a>
     </div>
      </div>
      <div >
      <p className="text-center front-bold py-1">Or Sign Up Using</p>
      <a href="https://www.sign-up.com" target="blank">
      <h1 className="text-center">Sing-Up</h1>
      </a>

      </div>


      </div>

      
    
    </div>
    
    
  
     
    </>
  )
}

export default App
