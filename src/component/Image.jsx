import React from 'react'

const Image = ({item}) => {
  return (
    <div>

<img className="w-full object-cover  mb-6 rounded-lg" src={item.urls.full} alt='img'/>


    </div>
  )
}

export default Image