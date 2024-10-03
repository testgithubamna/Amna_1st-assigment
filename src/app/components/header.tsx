import Link from "next/link"

export default function Header(){
    return(
        <div className="Header">
            <ul className="Header-buttons">
            <Link href={"/home"}>
                <li>Home</li>
                </Link>
                <Link href={"/about-us"}>
                <li>about us</li>
                </Link>
                <Link href={"/contact-us"}>
                <li>Contact us</li>
                </Link>
                <Link href={"/jobs"}>
                <li>Jobs</li>
                </Link>
           </ul>
        </div>
    )
}