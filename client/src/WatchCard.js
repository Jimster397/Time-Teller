function WatchCard({watch:{name, price, description, imageurl}}){
    return(
        <>
    <h2>Price in $ {price}</h2>
    <img src= {imageurl}/>
    <div>{name}</div>
    <p>{description}</p>
        </>
    )
}
export default WatchCard