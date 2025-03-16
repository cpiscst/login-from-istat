

 
 import twitter from "../src/assets/twitter.jpg"
 import instagram from "../src/assets/instagram.jpg"
 import facebook from "../src/assets/facebook.jpg"

 
 
function App() {


  return (
    <>
    <div className=" gap-3 flex justify-center p-4 ">
   
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
   
   <p className='text-right front-bold py-2'> Forget Password?</p>
   
    </div>
      </div>
      
    <div className="flex justify-center">
   
   <button className="bg-blue-300 p-3 text-black border-2 rounded-md w-[150px] h-[50px] ">
    Log-in
  </button>
   
      </div>
      
      <div className="my-10"> 
      <p className="text-center front-bold py-3">Or Sign Up Using</p>
     <div className="flex justify-center">
      
      <img className=" h-8 w-8" src= {twitter} alt="twitter" />
      
     
    
      
      <img className=" mx-2 h-8 w-8" src= {facebook} alt="facebook" />
     
        <img className=" h-8 w-8" src= {instagram} alt="instagram" />
      
     </div>
      </div>
      <div >
      <p className="text-center front-bold py-1">Or Sign Up Using</p>
      
      <h1 className="text-center">Sing-Up</h1>
      

      </div>


      </div>

      
    
    </div>
    
    
  
     
    </>
  )
}

export default App
