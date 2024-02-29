
import Card from "@/Pages/ThreeDCardDemo"


const Instruct = () => {
  return (
    <div className='h-screen flex p-10 space-between bg-white'>
        <section className='w-[100vh] mx-10 mt-10'>
            <h1 className="text-black text-3xl font-extrabold">Instructions</h1>
            <ul className=" my-10 list-disc [&>li]:mt-4 text-black text-4sm ">
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vero quas nisi consequatur, ea odio? Pariatur a eveniet aliquid, in minima dolorum</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vero quas nisi consequatur, ea odio? Pariatur a eveniet aliquid, in minima dolorum</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vero quas nisi consequatur, ea odio? Pariatur a eveniet aliquid, in minima dolorum</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vero quas nisi consequatur, ea odio? Pariatur a eveniet aliquid, in minima dolorum</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vero quas nisi consequatur, ea odio? Pariatur a eveniet aliquid, in minima dolorum</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vero quas nisi consequatur, ea odio? Pariatur a eveniet aliquid, in minima dolorum</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vero quas nisi consequatur, ea odio? Pariatur a eveniet aliquid, in minima dolorum</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vero quas nisi consequatur, ea odio? Pariatur a eveniet aliquid, in minima dolorum</li>
    </ul>
        </section>
        <section>
            <Card />
        </section>
        
    </div>
  )
}

export default Instruct