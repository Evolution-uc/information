import pic1 from "../assets/pic 1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import pic7 from "../assets/pic7.png";
import pic8 from "../assets/pic8.png";
import pic9 from "../assets/pic9.png";
import pic10 from "../assets/pic10.png";
import pic11 from "../assets/pic11.png";
import pic12 from "../assets/pic12.png";
import pic13 from "../assets/pic13.png";
import pic14 from "../assets/pic14.png";
import pic15 from "../assets/pic15.png";
import pic16 from "../assets/pic16.png";
import pic17 from "../assets/pic17.png";
import pic18 from "../assets/pic18.png";
import pic19 from "../assets/pic19.png";

const picture = [
  { name: "Half moon,california", mig: pic1, amout: "$1634 total" },
  { name: "Half moon,california", mig: pic2, amout: "$1640 total" },
  { name: "Half moon,california", mig: pic3, amout: "$1640 total" },
  { name: "Half moon,california", mig: pic15, amout: "$1674 total" },
  { name: "Half moon,california", mig: pic4, amout: "$1634 total" },
  { name: "Half moon,california", mig: pic5, amout: "$1634 total" },
  { name: "Half moon,california", mig: pic6, amout: "$1634 total" },
  { name: "Half moon,california", mig: pic7, amout: "$1634 total" },
  { name: "Half moon,california", mig: pic8, amout: "$1634 total" },
  { name: "Half moon,california", mig: pic9, amout: "$1634 total" },
  { name: "Half moon,california", mig: pic10, amout: "$1634 total" },
  { name: "Half moon,california", mig: pic11, amout: "$1634 total" },
  { name: "Half moon,california", mig: pic12, amout: "$1634 total" },
  { name: "Half moon,california", mig: pic13, amout: "$1634 total" },
  { name: "Half moon,california", mig: pic14, amout: "$1634 total" },
  { name: "Half moon,california", mig: pic15, amout: "$1634 total" },
  { name: "Half moon,california", mig: pic16, amout: "$1634 total" },
  { name: "Half moon,california", mig: pic17, amout: "$1634 total" },
  { name: "Half moon,california", mig: pic18, amout: "$1634 total" },
  { name: "Half moon,california", mig: pic19, amout: "$1634 total" },
];

function Product() {
  return (
    <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mx-6  md:mx-10 lg:mx-12 gap-2 pt-2 items-center">
      {picture.map((picture, index) => (
        <div key={index}>
          <img src={picture.mig} alt={picture.name} />
          <h2 className="text-slate-300">{picture.name}</h2>
          {/* <p>{picture.amout}</p> */}
        </div>
      ))}
    </div>
  );
}

export default Product;
