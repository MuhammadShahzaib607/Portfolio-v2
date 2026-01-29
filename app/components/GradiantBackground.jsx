import React from 'react'

const GradiantBackground = () => {
  return (
    <div className="fixed w-full h-full -z-10">
  <canvas className='w-full h-full gradiant_bg'></canvas>
  <div className="shadow-[-160px_1px_110px_0px_#3a1c3a] text-white absolute top-[50%] right-[-220px] h-[300px] w-[220px]"></div>
  <div className="shadow-[160px_1px_110px_0px_#3a1c3a] text-white absolute top-0 left-[-230px] h-[300px] w-[220px]"></div>
</div>
  )
}

export default GradiantBackground