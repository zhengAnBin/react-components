// 径向菜单
// 有两个级别
const radialItem = [
  {
    top: "100px",  // 可以自定义位置
    left: "100px",  
    icon: "",  // icon 写的名就可以了
    children: [  // 二级

    ]
  }
]

export interface radialItemProps {
  radialItem: Array<object>, 
  radius?: number,    // 半径
  size?: number,
  rotate?: number
}

export default {}