import React, { 
  useState, 
  Children, 
  cloneElement, 
  ReactElement,
 } from "react"
import { IMenuItemStyle } from "./menuInterface"
import Svg from "./Svg"
import "./style.css"

export interface parentProps {
  iconName?: string,
  iconSize?: number,
  size?: number,
  style?: IMenuItemStyle,
}

const MenuParent:React.FC<parentProps> = (props) => {
  const [ open, setOpen ] = useState(false)

  const { 
    iconName,
    iconSize,
    children,
    size,
  } = props

  

  const perentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(!open)
  }

  
  return (
    <div className="menu-parent" style={{ width: size + 'px', height: size + 'px' }} onClick={perentClick}>
      <Svg iconSize={iconSize} iconName={iconName}></Svg>
      { Children.map(children, child => {
        return cloneElement(child as ReactElement, {
          open: open,
          size: size
        })
      }) }
    </div>
  )
}

export default MenuParent