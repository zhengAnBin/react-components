import React from "react"
import "./style.css"

export interface parentProps {
  iconName?: string,
  iconSize?: number,
  size?: number
}


const menuParent:React.FC<parentProps> = (props) => {
  const { 
    iconName,
    iconSize,
    children,
    size
  } = props

  const styles = {
    width: size + 'px',
    height: size + 'px'
  }

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
    <div className="menu-parent" style={styles}>
      { 
        iconName ? getSvg() : "?"
      }
      { children }
    </div>
  )
}

export default menuParent