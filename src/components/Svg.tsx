import React from "react"

interface ISvgProps {
  iconName?: string
  iconSize?: number
}

const Svg:React.FC<ISvgProps> = (props) => {
  const {
    iconSize,
    iconName
  } = props
  return (
    <svg 
      aria-hidden="true"
      width={iconSize} 
      height={iconSize}
    >
      <use xlinkHref={'#icon-' + iconName}></use>
    </svg>
  )
}

export default Svg