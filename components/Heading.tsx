import React from 'react'

type HeadingProps = {
  className?:string,
  title?:string,
}
const Heading = ({className,title}:HeadingProps) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}>
      {title && <h2 className='h2'>{title}</h2>}
    </div>
  )
}

export default Heading
