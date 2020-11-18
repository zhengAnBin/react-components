import React from "react"

export interface ISvgProps {
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
      data-testid="test-svg"
      aria-hidden="true"
      width={iconSize} 
      height={iconSize}
    >
      <use xlinkHref={'#icon-' + iconName}></use>
    </svg>
  )
}

Svg.defaultProps = {
  iconName: "close",
  iconSize: 16
}

export default Svg