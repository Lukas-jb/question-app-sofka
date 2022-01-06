import {Link} from "react-router-dom"

const Navbar = ({elements}) => {
    return (
        <div>
            👽👾👉 Navbar 👈👾👽
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
           
           {
               elements.map((element,index)=>{
                   return (<Link key={index} to={element.url}>{element.titulo}</Link>)
               })
           }
        </div>
        </div>
    )
}

export default Navbar
