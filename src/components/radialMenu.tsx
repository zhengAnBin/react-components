import React, { ReactNode } from "react"
import MenuParent from "./menuParent"
import MenuChild from "./menuChild"

interface Parent {
  startPoistion?: number,
  angleExtent?: number,
  radius?: number,
  childrens?: Child[] | undefined
}

interface Child extends Parent {
  top?: number,
  left?: number,
  iconName?: string
}

interface RadialProps {
  data: Parent,
  size?: number,
  iconSize?: number
}

const RadialMenu: React.FC<RadialProps> = (props) => {
  
  const {
    data,
    size,
    iconSize
  } = props
  const childClick = (item:string) => {
    console.log(item)
  }
  const RadialRecursion = ( data: Child ): ReactNode => {

    const { 
      childrens,
      startPoistion = 0,
      angleExtent = 180,
      radius = 50
    } = data

    if(data.childrens !== undefined && Array.isArray(data.childrens) && data.childrens.length !== 0){

      const angle =
              angleExtent > 300 || angleExtent < -300 ? 300 : angleExtent;

      const frags = angle / ((childrens as Child[]).length - 1 || 1);

      return (childrens as Child[]).map((item, index) => {

        const angles = (Math.PI * (frags * index + startPoistion)) / 180
        
        let style = {
          width: size + "px",
          height: size + "px",
          left: item.left 
                ? item.left + 'px'
                : -1 * ((size as number) / 2 + Math.cos(angles) * radius - (size as number) / 2) + 'px',
          top: item.top
                ? item.top + 'px'
                : (size as number) / 2 - Math.sin(angles) * radius - (size as number) / 2 + 'px'
        }
        console.log(style)
        const isSvg = item.childrens ? false : true
        if(item.childrens){ // 递归
          return <MenuChild 
            key={item.iconName}
            iconSize={iconSize}
            iconName={item.iconName}
            style={style}
            cb={childClick}
            isSvg={isSvg}
          >{ RadialDataMap(item) }</MenuChild>
        } else {
          return <MenuChild 
            key={item.iconName}
            iconName={item.iconName}
            iconSize={iconSize}
            style={style}
            cb={childClick}
            isSvg={isSvg}
          ></MenuChild>
        }
      })
    }
  }

  const RadialDataMap = ( data: Child ) => {
    
    if(data.childrens !== undefined && Array.isArray(data.childrens) && data.childrens.length !== 0){
      return (
        <MenuParent 
          iconName={data.iconName} 
          iconSize={iconSize} 
          size={size} 
        >
          { RadialRecursion(data) }
        </MenuParent>
      )
    } else {
      return <div>出错了，请检查数据结构</div>
    }
  }

  return RadialDataMap(data)
}

RadialMenu.defaultProps = {
  size: 50,
  iconSize: 15
}

export default RadialMenu