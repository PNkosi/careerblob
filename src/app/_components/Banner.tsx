import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import Button from './Button'



const Banner = ({classname, title, subTitle, button}: BannerProps) => {
  return (
    <section className={clsx("py-12 text-center", classname)}>
        <h1 className='text-white capitalize'>{title}</h1>
        <p className='text-light-purple'>{subTitle}</p>
        {button && <Button className='bg-cyan-blue' href={button.buttonLink}>{button.buttonText}</Button>}
    </section>
  )
}

export default Banner