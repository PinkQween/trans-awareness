import { useState } from "react"

const App = () => {
  const [helpClicked, setHelpClicked] = useState(false)

  return (
    <div className='flex justify-center'>
      <div className='absolute -z-10'>
        <div className="h-[20vh] w-screen bg-transBlue" />
        <div className="h-[20vh] w-screen bg-transPink flex justify-center items-center">
          <p className='text-9xl text-white font-black uppercase'>Trans Awareness</p>
        </div>
        <div className="h-[20vh] w-screen bg-white" />
        <div className="h-[20vh] w-screen bg-transPink" />
        <div className="h-[20vh] w-screen bg-transBlue flex justify-center items-center" />
        </div>

      <div className={`bg-white ${helpClicked ? "rounded-2xl" : "rounded-full"} absolute bottom-10 right-10 ${helpClicked ? "w-96 h-[32rem]" : "w-32 h-32"} border-black border-2 flex items-center justify-center transition-all duration-200`} onClick={() => setHelpClicked(!helpClicked)}>
          {helpClicked ? (
<></>
          ) : (
            <p className="text-red-600 text-8xl font-black">!</p>
          )}
       </div>
    </div>
  )
}

export default App
