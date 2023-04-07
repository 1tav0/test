import React from 'react'
import Avatar from '@mui/material/Avatar'
import './Info.css'

const Info = () => {
  return (
    <div className='info__wrapper'>
        <div className='google__image'>
           <h1 className='main-google' >Google</h1>
        </div>
        <form>
            <div>
                <input size="60" className='text-hold' type='text' placeholder='search...'/>
                <i  class="material-icons">Beta</i>
                <input class="search-bar" type="button" value="Google Search" onClick="Lets Goooo" />
                <input className='lucky-bar' type="button" value="I'm Feeling Lucky" onClick="lucky Cat" />
            </div>
        </form>
    </div>
  )
}
//changed also in master

export default Info