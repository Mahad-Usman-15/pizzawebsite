import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const Typewriter = () => {
  return (
    <div >
  <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      1000,
      'We produce food for Double Trouble Deal', // initially rendered starting point
      1000,
      'We produce food for Solo Saver Deal ',
      1000,
      'We produce food for Family Feast',
      1000,
      'We produce food for Smoky Ribs Platter',
      1000,
    ]}
    speed={50}
    style={{ fontSize: '18px', color:"white" }}
    repeat={Infinity}
  />
</div>
  )
}

export default Typewriter