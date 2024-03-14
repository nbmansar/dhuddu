import React from 'react';
import { useState } from 'react';

const Content = () => {
    const [count,setCount] = useState(3);
    const [glow,notGlow] = useState(false);
    function AnsMinus(){
        setCount(count-1)
    }
    function AnsPlus(){
        setCount(count+1)
    }
    function isGlow(){
        notGlow(!glow);
    }
return (
<div className='TextTwist'>
    <button onClick={()=>AnsMinus()}>-</button>
    <p>{count}</p>
    <button onClick={()=>AnsPlus()}>+</button>
    <button onClick={()=>isGlow()}>{glow == true ? 'on':'off'}</button>
</div>
)
}

export default Content;