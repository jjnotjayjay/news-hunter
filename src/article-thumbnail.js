import React from 'react'

export default function ArticleThumbnail(props) {
  const { image } = props

  return image && image.length > 0
    ? <img src={'https://www.nytimes.com/' + image[0].url} alt='' />
    : <img src='Assets/newspaper.png' alt='' />
}
