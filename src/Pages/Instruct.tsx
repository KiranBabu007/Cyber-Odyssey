
import Card from "@/Pages/ThreeDCardDemo"


const Instruct = () => {
  return (
    <div className='h-auto flex p-10 space-between bg-white'>
      <section className='w-[100vh]  mx-10 mt-10 text-white'>
        <h1 className="text-black text-4xl font-extrabold">Instructions</h1>
        
        <ul className="  font-kode-mono my-10 list-disc [&>li]:mt-4 text-black text-4sm ">
          <li>Unravel the double-layer encrypted flag using your cryptographic prowess.</li>
          <li>Hone your decoding skills by effectively using Rumkin's diverse cipher tools.</li>
          <li>Embrace resourcefulness by tapping into a wealth of online resources and hints.</li>
          <li>The flag becomes your golden key, unlocking the gates to the next chapter in this Cyber Odyssey - The Webmaster's Riddle.</li>
          <li>Wishing you the utmost success as you embark on this solo 'journey to the flag', deftly utilizing all available resources!</li>
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