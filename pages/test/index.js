import Link from 'next/link';
import styles from '../../styles/user.module.css'; 
import design from '../../styles/Jobs.module.css';

export const getStaticProps = async () => {

    const respon = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await respon.json();
    return{
        props: {value:data}
    }
}   

const test = ({value}) => {
     return (  
         <>
         <head>
        <title>NEXT | USER</title>
        <meta name="keywords" content="Sara learning Nextjs"/>
        <meta name="description" content="Free Web tutorials"/>
      </head> 
         <div>
             <h2>User Name</h2> 
        {value.map(val =>(
            <Link href={"/test/" + val.id} key={val.id} >
               <a> <h4 className={styles.user_details}>{val.name}</h4> </a> 
            </Link>
             
        ))}
           
         </div>

         <h4 className={design.user_details}>Name</h4> 
         </>
     );
 }
  
 export default test;