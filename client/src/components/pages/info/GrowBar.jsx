import React, {useEffect, useState} from 'react';

const GrowBar = function({skill, num, index}) {
  const [mounted, setMounted] = useState(false);

  const width = mounted ? num * 10 + '%' : '0%';

  useEffect(()=>{
    setTimeout(()=>{
      setMounted(true);
    }, 1000 + (index * 250));
  }, []);

  return (
    <div className='growBar anchor' style={{width: width}}>
      {skill}
    </div>
  )
};

export default GrowBar;