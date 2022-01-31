 export const getStaticPaths = async () => {
    const respon = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await respon.json();
    const paths = data.map(value => {
        return{
            params: { id: value.id.toString() }
        }
    })

    return{
       paths,
       fallback: false
    }
 }

 export const getStaticProps = async (context) => {
    const id = context.params.id;
    const respon = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await respon.json();
    return{
        props: {value:data}
    }
}

const details = ({ value })  => {
    return (    
        <>
            <div>
                <h1>{value.name}</h1>
                <p>Email : {value.email}</p>
                <p>Username: {value.username}</p>
                <p>Street: {value.address.street}</p>
                <p>City: {value.address.city}</p>
                <p>Zipcode: {value.address.zipcode}</p>
                <p>Phone: {value.phone}</p>
            </div>
        </>
    );
}
 
export default details;