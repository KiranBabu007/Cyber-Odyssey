
import { WavyBackground } from "@/components/ui/wavy-background"
import { ParallaxText } from "@/components/ui/Parallax"

const Hero = () => {
  return (

    <div className='h-screen w-screen bg-gradient-to-r from-gray-900 to-zinc-900'>
      <WavyBackground
        colors={[" #6228d7", "#ee2a7b", "#dd2476", "#ff073a", "#ff0033 "]}
        waveWidth={100}
        backgroundFill="black"
        blur={10}
        speed="fast"
        waveOpacity={0.5}
        className="h-screen"
      >


        <div className="header h-screen w-screen flex flex-col justify-center items-center  text-center  ">
          <h1 className='p-5 mt-[20vh] font-sans text-6xl bg-slate-200 font-extrabold bg-clip-text text-transparent'>Cyber Odyssey</h1>
          <span className='m-3 font-kode-mono text-xl bg-slate-200 font-extrabold italic bg-clip-text text-transparent' >Round 1 - Cryptic Prelude</span>
          {/* <ParallaxText baseVelocity={-5}>CYBER ODYSSEY</ParallaxText> */}
        </div>



      </WavyBackground>



    </div>
  );
}

export default Hero