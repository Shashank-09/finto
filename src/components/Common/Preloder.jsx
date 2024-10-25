import Image from 'next/image'
import React from 'react'

const Preloder = () => {
  return (
    <section>
        <div
  className="preloader-area text-center position-fixed top-0 bottom-0 start-0 end-0"
  id="preloader"
>
  <div className="loader position-absolute start-0 end-0">
    <div className="wavy position-relative fw-light">
      <span className="d-inline-block">
        <Image src="/images/favicon.png" alt="favicon"  width={20} height={20}/>
      </span>
      <span className="d-inline-block">I</span>
      <span className="d-inline-block">N</span>
      <span className="d-inline-block">T</span>
      <span className="d-inline-block">O</span>
    </div>
  </div>
</div>

    </section>
  )
}

export default Preloder;