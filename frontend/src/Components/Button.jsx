
const Button = ({name ,className,type="button" ,onClick,disabled}) => {
  return (
    <button 
    type={type}
    onClick= {onClick}
    disabled={disabled}
    className={`border rounded-xl px-4 py-1 ${className}
    bg-gradient-to-t from-gray-700 to-black hover:cursor-pointer`}>  
    {name}
   
  </button>
  )
}

const Button2 = ({name ,className,type="button"}) => {
  return (
    <button 
    type={type}
    className={`border rounded-xl px-4 py-1 ${className}`}>  
    {name}
  </button>
  )
}
export { Button
, Button2 }
