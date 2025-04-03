
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot} from '@fortawesome/free-solid-svg-icons';

export const NavLinks = [
    {
        name: "Home",
        add: "/",
    },
    {
        name: "About",
        add: "/about"
    },
    {
        name: "Menu",
        add: "/menu"
    },
    {
        name: "Reservation",
        add: "/reservation"
    },
    {
        name: "Order",
        add: "/order"
    },
    {
        name: "Login",
        add: "login"
    }
];

export const SocialLinks = [
    {
        icon: faFacebook,
        name: 'Facebook',
        path: 'https://facebook.com'
    },
    {
        icon: faInstagram,
        name: 'Instagram',
        path: 'https://instagram.com'
    },
    {
        icon: faYoutube,
        name: 'Youtube',
        path: 'https://youtube.com'
    }
]

export const ContactDetail = [
    {
        icon: faLocationDot,
        name: 'Address',
    },
    {
        icon: faPhone,
        name: 'Phone Number'
    },
    {
        icon: faEnvelope,
        name: 'Email'
    }
]