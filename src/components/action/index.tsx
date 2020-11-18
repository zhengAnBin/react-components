/**
 * 一个按钮操作点
 */

import React, { MouseEvent } from "react"
import classNames from "classnames"
import "./style.css"

export enum ActionShape {
  party = "party",   // 方
  round = "round"    // 圆
}

// export enum ActionType {
//   add = "add",  // + 添加
//   close = "close",  // x 关闭
//   correct = "correct"  //  √  正确
// }

type ActionType = "add" | "close" | "correct"

export interface ActionProps {
  /**
   * action 的类型 add close correct
   */
  type?: ActionType
  /**
   * action的大小 width height
   */
  size: number
  /**
   * unit是size的单位 默认px
   */
  unit?: string
  /**
   * className是action的类名
   */
  className?: string
  /**
   * action的形状,  默认为: 圆形<round> |  方形<party>
   */
  shape?: ActionShape
  /**
   * action的点击函数 第一个参数是MouseEvent对象，第二个是 clickParams 
   */
  onClick?: (event: MouseEvent, clickParams: any) => void
  /**
   * action点击触发的回调函数的第二个参数， 如果有多个，请使用对象的形式传入
   */
  clickParams?: any,
}

const Action: React.FC<ActionProps> = (props) => {

  const { 
    type,
    size, 
    className, 
    children, 
    unit, 
    shape = "round", 
    onClick, 
    clickParams
  } = props

  const classes = classNames(className, "action", {
    [`action-${shape}`]: shape,
    "action-close": type === "close"
  })

  const styles = {
    width: size + (unit ? unit : "px"),
    height: size + (unit ? unit : "px"),
    lineHeight: size + (unit ? unit : "px"),
  }

  const click = (e: MouseEvent) => {
    (onClick && typeof onClick === "function") ? 
      onClick(e, 
        // 如果clickParams是对象，就做一层拷贝
        typeof clickParams === 'object' ? Object.assign({}, clickParams) : clickParams ) : 
        new Error("onClick is not function, please check onClick params")
  }

  const isType = () => {
    // 如果 type 和 children 同时存在，那么只展示 children
    if(children) {
      return children
    }
    switch(type) {
      case "add" :
        return "+"
      case "close" :
        return "+"
      case "correct" :
        return "√"
      default :
       return children
    }
  }

  return <div 
    className={classes} 
    style={styles} 
    onClick={click}
  >
    { isType() }
  </div>

}

export default Action