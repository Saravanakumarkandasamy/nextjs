/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import Image from 'next/image';
import Logoimages from '../public/sk_logo.png';

const Navbar = () => {
    return (  
        
        <nav>
            <div className="logo"><Link href="/"><Image src={Logoimages} alt="logo" width={150} height={50}/></Link></div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About Us</a></Link>
            <Link href="/test"><a>Users</a></Link>
            
            
        </nav>

    );
}
 
export default Navbar;