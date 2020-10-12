import 
  React, 
  { 
    Fragment, 
    useState, 
    useEffect
  } from "react"
import { IMenuItemStyle } from "./menuInterface"
import Svg from "./Svg"
import "./style.css"

type callback = ( item: string ) => any

export interface childProps {
  iconName?: string,
  size?: number,
  iconSize?: number,
  style?: IMenuItemStyle,
  cb?: callback,
  isSvg: boolean,
  open?: boolean
}

const MenuChild:React.FC<childProps> = (props) => {
  const {
    children,
    iconName,
    iconSize,
    style = {},
    cb = () => {},
    isSvg,
    open
  } = props
  const obj:React.CSSProperties = {
    left: "0px",
    top: "0px",
    visibility: "hidden"
  }
  const [styles, setStyles] = useState(obj)
  
  useEffect(() => {
    open ? setStyles(style) : setStyles(obj)
  }, [open])
  
  const childClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    cb((iconName as string))
  }
  
  const setSvg = () => { if(isSvg) return <Svg iconSize={iconSize} iconName={iconName}></Svg> }

  return (
    <div className="menu-child" style={styles} onClick={childClick}>
      { setSvg() }
      <Fragment>{ children }</Fragment>
    </div>
  )
}

export default MenuChild