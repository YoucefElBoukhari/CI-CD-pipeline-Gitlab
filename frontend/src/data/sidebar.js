import { FaTh } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { MdOutlineInventory } from "react-icons/md";




const menu = [
  {
    title: "Accueil",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Ajouter un produit",
    icon: <BiImageAdd />,
    path: "/add-product",
  },
  {
    title: " Les factures",
    icon: <MdOutlineInventory />,
    path: "/add-client",
  }
];

export default menu;