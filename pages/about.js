function AboutPage(props){
    return (
        <div>
            <h1>About Page</h1>
            <h2>{props.users}</h2>
        </div>
    )
}

export async function getServerSideProps(context){
    return {
        props : {
            users :  'Arya'
        }
    }
}
export default AboutPage;