
import { WavyBackground } from "@/components/ui/wavy-background"

const Hero = () => {
  return (

    <div className='h-screen w-100 bg-gradient-to-r from-gray-900 to-zinc-900'>
      <WavyBackground
        colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
        waveWidth={100}
        backgroundFill="black"
        blur={10}
        speed="fast"
        waveOpacity={0.5}
        className="h-screen"
      >
        <div className="header h-screen flex flex-col justify-center items-center  text-center  ">
          <h1 className='p-5 font-sans text-6xl bg-slate-200 font-extrabold bg-clip-text text-transparent'>Cyber Odyssey</h1>
          <span className='m-3 font-kode-mono text-xl bg-slate-200 font-extrabold italic bg-clip-text text-transparent' >Round 1 - Cryptic Prelude</span>
        </div>


      </WavyBackground>

      {/* <section className="ml-20">
        <h1 className="scroll-m-20 text-3xl py-8 font-extrabold tracking-tight lg:text-4xl text-slate-100">
      Instructions
    </h1>
    <ul className=" ml-6 list-disc [&>li]:mt-2 text-white text-slate-200 ">
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vero quas nisi consequatur, ea odio? Pariatur a eveniet aliquid, in minima dolorum</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vero quas nisi consequatur, ea odio? Pariatur a eveniet aliquid, in minima dolorum</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vero quas nisi consequatur, ea odio? Pariatur a eveniet aliquid, in minima dolorum</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vero quas nisi consequatur, ea odio? Pariatur a eveniet aliquid, in minima dolorum</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vero quas nisi consequatur, ea odio? Pariatur a eveniet aliquid, in minima dolorum</li>
    </ul>
      </section> */}

    </div>
  );
}

export default Hero