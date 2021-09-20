import { faLayerGroup, faLink, faUserCog, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardData = [
    {
        name: "Admins",
        quantity: "5 Admins",
        icon: <FontAwesomeIcon icon={faUserCog}/>
    },
    {
        name: "Users",
        quantity: "541 Users",
        icon: <FontAwesomeIcon icon={faUsers}/>
    },
    {
        name: "Groups",
        quantity: "55 Groups",
        icon: <FontAwesomeIcon icon={faLayerGroup}/>
    },
    {
        name: "Roles",
        quantity: "25 Roles",
        icon: <FontAwesomeIcon icon={faLink}/>
    },
]

export default cardData;