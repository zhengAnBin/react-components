import React from "react"
import "./style.css"

export interface IChildStyle {
  top?: string,
  left?: string
}

export interface childProps {
  iconName?: string,
  size?: number,
  iconSize?: number,
  style?: IChildStyle
}

const menuChild:React.FC<childProps> = (props) => {

  const {
    children,
    iconName,
    iconSize,
    style
  } = props

  const getSvg = () => {
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

  return (
    <div className="menu-child" style={style}>
      { 
        iconName ? getSvg() : "?"
      }
      { children }
    </div>
  )
}

export default menuChild