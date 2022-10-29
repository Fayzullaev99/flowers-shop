import React from 'react'
import classes from './Title.module.scss'

function Title({children}) {
  return (
    <div className={classes['title']}>
        {children}
    </div>
  )
}

export default Title