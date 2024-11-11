import s from '../Contact/Contact.module.css'
import { FaUserAlt } from "react-icons/fa";
const Contact = (name, number) => {
    return (
     <li>
        <p><FaUserAlt />{name}</p>
        <p>{number}</p>
        <button>Delete</button>
     </li>
    )
}
