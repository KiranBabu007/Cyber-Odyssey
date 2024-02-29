import  { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BackgroundGradientAnimation
 } from '@/components/ui/background-gradient-animation';


const RedirectComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValidKey, setIsValidKey] = useState(false);
  const [isWrong,setIsWrong] =useState(false)

  
  const checkKey = () => {
    const validKey = 'S2lyYW4='; 
    if (inputValue === atob(validKey)) { 
      setIsValidKey(true);
    } else {
      setIsValidKey(false);
      setIsWrong(true)
      setTimeout(() => {
        setIsWrong(false);
      }, 3000);
    }
  };

  const redirectToWebsite = () => {
    if (isValidKey) {
        const encodedUrl = 'aHR0cHM6Ly9nb29nbGUuY29t'; 
        const decodedUrl = atob(encodedUrl);
        window.location.href = decodedUrl;
    }
  };

  return (

    <div className='h-screen'>
        <BackgroundGradientAnimation className='flex flex-col justify-center items-center h-full'>
            
      
        <div className='
        text-center'>
             <h5 className=" text-white text-3xl font-bold ">
          Check your Deciphered Code Here to <br className="my-5" /> Enable The Redirection Link
        </h5>
        </div>
   <div className='flex mt-10 gap-10'>
    <Input
      className='w-100 mb-10 '
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}/>
      
      <Button  onClick={checkKey}>Check</Button>
      <Button  onClick={redirectToWebsite} disabled={!isValidKey} >Redirect</Button>
    
   </div>
   {isWrong && <p className="text-red-500 text-shadow ">Wrong key entered. Please try again.</p>} 
            
      
        </BackgroundGradientAnimation>
      
    </div>
  );
};

export default RedirectComponent;