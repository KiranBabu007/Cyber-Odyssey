import  { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const RedirectComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValidKey, setIsValidKey] = useState(false);

  
  const checkKey = () => {
    const validKey = 'S2lyYW4='; 
    if (inputValue === atob(validKey)) { 
      setIsValidKey(true);
    } else {
      setIsValidKey(false);
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
    <div className='h-100 flex items-center justify-center'>
      <Input
      className='w-100'
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}/>
      
      <Button className='m-5' onClick={checkKey}>Check</Button>
      <Button className='m-5' onClick={redirectToWebsite} disabled={!isValidKey} >Redirect</Button>
      
    </div>
  );
};

export default RedirectComponent;
