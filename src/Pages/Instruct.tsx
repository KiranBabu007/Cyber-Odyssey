
import Card from "@/Pages/ThreeDCardDemo"


const Instruct = () => {
  return (
    <div className='h-auto flex p-10 space-between bg-white'>
      <section className='w-[100vh]  mx-10 mt-10 text-white'>
        <div className="flex">
          <h1 className="text-black text-4xl font-extrabold">Instructions</h1>
          <div className="mx-40"><p>Rotate</p></div>
        </div>

        <ul className="font-kode-mono my-10 list-disc [&>li]:mt-4 text-black text-4sm ">
          <li>Decrypt the double-layer encrypted flag using your cryptographic skills.</li>
          <li>Hone your decoding skills by effectively using Rumkin's diverse cipher tools.</li>
          <li>Embrace resourcefulness by tapping into a wealth of online resources and hints.</li>
          <li>The flag becomes your golden key, unlocking the gates to the next chapter in this Cyber Odyssey - The Webmaster's Riddle.</li>
          <li>You are required to utilize a cipher method initially to decrypt the code, and subsequently employ a method from code and substitution to acquire the final key.</li>
          <li>The cipher method to be utilized is concealed within this very website.</li>
          <li>Wishing you the utmost success as you confidently embark on this solo "journey to the flag", skillfully utilizing all available resources!</li>

        </ul>
      </section>
      <section>
        <Card />
      </section>

    </div>
  )
}

export default Instruct