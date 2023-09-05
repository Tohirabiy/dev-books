import React from 'react';
import { Button ,TextInput} from 'flowbite-react';

const SearchPanel = () => {
    return  <div className='w-[80%] rounded-[15px] bg-white py-[47px] px-[144px]  border mx-auto -mt-12 relative'>
        <h1 className="text-center text-[31px] mb-[13px]">Qidirish</h1>
        <div className="flex gap-x-[14px]" >
        <TextInput id='base' sizing="md" type="text"  className='grow font-sans' placeholder='Adiblar, kitoblar, audiolar, maqolalar...'/> 
        <Button className="text-[#C9ACBC] font-sans">
            Izlash
        </Button>


        </div>
            
        </div>
    
};

export default SearchPanel;