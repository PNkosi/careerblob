import clsx from 'clsx';
import Link from 'next/link'
import React from 'react'



const Button = (props: Button) => {
  return (
    <Link className={clsx('inline-block px-4 py-2 rounded-full w-fit', props.className)} href={props.href}>{props.children}</Link>
  )
}

export default Button