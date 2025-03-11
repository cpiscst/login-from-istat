


function App() {


  return (
    <>
    <div className="flex justify-center ">
      <div className="my-20 max-w-[600px] pl-5 border-2 p-5 ">
      <h1 className="text-6xl font-bold pb-10">
  Login-from
</h1>
      <div className='bg-white'>
    <p className='text-xl front-bold'> User Name or Email:</p>
    <input type="text" className='border-2 rounded-md h-[40px] w-[300px] font-blod text-gray-500 text-xl p-3' />
    </div>
    
    <div className='bg-white'>
    <p className='text-xl front-bold'> Password:</p>
    <input type="text" className='border-2 rounded-md h-[40px] w-[300px] font-blod  text-gray-500 text-xl p-3' />
    </div>
    <div className="my-3"></div> 
    <div className='bg-white'>
    <p className='text-right front-bold'> Forget Password?</p>
   
    </div>
    <div className="flex justify-center">
    <button className="bg-blue-300 p-3 text-black border-2 rounded-md w-[150px] h-[50px] m-15">
    Log-in
  </button>
      </div> 
   
      </div>
    </div>
    
    
  
     
    </>
  )
}

export default App
