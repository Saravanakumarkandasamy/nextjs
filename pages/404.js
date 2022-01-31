import Link from "next/link";
 import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
 
    const backtohome = useRouter();
    useEffect(() => {
        setTimeout(() => {
            backtohome.push("/");
        },3000)
    },[backtohome])
    return (  
        <div className="not-found">
            <h1>OOOOPS..</h1>
            <p>Page not found.</p>
            <p>Go back to <Link href="/"><a>Home Page</a></Link></p>
        </div>
    );
}
 
export default NotFound;