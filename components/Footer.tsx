import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex-col justify-center pt-24">
            <div className="flex justify-center gap-10">
                <Link href='https://www.facebook.com/'><div className="text-4xl"><FaFacebookSquare /></div></Link>
                <Link href='https://www.instagram.com/'><div className="text-4xl"><FaInstagram /></div></Link>
                <Link href='https://x.com/'><div className="text-4xl"><FaTwitter /></div></Link>
                <Link href='https://www.linkedin.com/'><div className="text-4xl"><FaLinkedin /></div></Link>
            </div>
            <div className="flex justify-center py-6">Copyright ©2020 All rights reserved</div>
        </div>
    )
}

export default Footer