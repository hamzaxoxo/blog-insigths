import { FaXTwitter } from "react-icons/fa6";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaMediumM,
    FaQuora,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface socialLinks {
    name: string;
    url: string;
    icon: IconType;
}[]

export const TopBannersocialLinks: socialLinks[]
    = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/username",
            icon: FaFacebookF
        }, {
            name: "LinkedIn",
            url: "https://www.linkedin.com/username",
            icon: FaLinkedinIn
        }, {
            name: "Quora",
            url: "https://www.quora.com/username",
            icon: FaQuora
        }, {
            name: "Medium",
            url: "https://www.medium.com/username",
            icon: FaMediumM
        },
    ]

export const FootersocialLinks: socialLinks[]
    = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/username",
            icon: FaFacebookF
        }, {
            name: "Twitter",
            url: "https://www.twitter.com/username",
            icon: FaXTwitter
        }, {
            name: "LinkedIn",
            url: "https://www.linkedin.com/username",
            icon: FaLinkedinIn
        },
    ]