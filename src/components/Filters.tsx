import chido1 from "../assets/Category tabs.png"
import chido2 from "../assets/Component 15 (1).png"
import chido3 from "../assets/Component 16.png"
import chido4 from "../assets/Component 17 (1).png"
import chido5 from "../assets/Component 18 (1).png"
import chido6 from "../assets/Component 20 (1).png"
import chido7 from "../assets/Component 21.png"
import chido8 from "../assets/Component 22 (1).png"
import chido9 from "../assets/Component 23 (1).png"
import chido10 from "../assets/Component 24 (1).png"
import chido11 from "../assets/Component 25 (1).png"
import chido12 from "../assets/Frame 625773.png"
import chido13 from "../assets/Frame 625775.png"

function Filters() {
  let Product = [
    {img:chido1},
    { img:chido2},
    {img:chido3},
    {img:chido4},
    {img:chido5},
    {img:chido6},
    {img:chido7},
    {img:chido8},
    {img:chido9},
    {img:chido10},
    {img:chido11},
    {img:chido13},
    {img:chido12}

  ]
  return (
   <div className="flex gap-7 sm:mx-6 md:mx-10 lg:mx-12 pt-3 "> 
   {Product.map((product, index) => (
     <img key={index} src={product.img} alt={`Product ${index + 1}`} />
   ))}
 </div>

    
  )
}

export default Filters