
const Card = ({ data }) => {
    // console.log(props);
    return (<div className="card">

        <div><img src={data?.mainImage?.src} alt="image" /></div>
        <div>
            <h1>{data.name}</h1>
            <p> {data.price}</p>
        </div>
    </div>)
}

export default Card;