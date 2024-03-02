
import Card from "@/Pages/ThreeDCardDemo"


const Instruct = () => {
  return (
    <div className='h-auto flex p-10 space-between bg-white'>
      <section className='w-[100vh]  mx-10 mt-10 text-white'>
        <div className="flex">
          <h1 className="text-black text-5xl mb-2 font-extrabold">Instructions</h1>
          <div className="mx-40"><p>Rotate</p></div>
        </div>

        <ul className="font-kode-mono my-10 list-disc [&>li]:mt-4 text-black text-4sm ">
          <p className="font-bold text-red-600">Read Through the Instructions Carefully !</p>
          <li>Decrypt the double-layer encrypted flag using your cryptographic skills.</li>
          <li>Use Rumkin Website to decode the encrypted Code [RMLRAZGRXROVU]</li>
          <li>You are required to utilize a cipher method initially to decrypt the code, and subsequently employ a method from code and substitution to acquire the final key.</li>
          <li>The cipher method to be utilized is concealed within this very website.</li>
          <li>The flag becomes your golden key, unlocking the gates to the next chapter in this Cyber Odyssey - The Webmaster's Riddle.</li>
          <li>Wishing you the utmost success as you confidently embark on this solo "journey to the flag"</li>

        </ul>
      </section>
      <section>
        <Card />
      </section>

    </div>
  )
}

export default Instruct