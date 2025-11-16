import { Button as button } from "@/interfaces"

const Button:React.FC<button> = ({title,styles})=>{

    return(<button className= {styles}> {title}</button>)
}

export default Button