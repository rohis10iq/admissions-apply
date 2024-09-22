import { FC } from "react"

const Header:FC<{text:string}> = ({text}) => {
  return (
    <div className="w-full h-[450px] bg-[url('./assets/authHeader.png')] bg-no-repeat bg-cover 
        flex items-end justify-center
    ">
        <h1 className="text-center text-white text-[90px] font-bold capitalize">{text}</h1>
    </div>
  )
}

export default Header