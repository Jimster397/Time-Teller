function WatchCard({watch:{name, price, description, imageurl}}){
    return(
        <div class= "card">
    <h2>Price in $ {price}</h2>
    <img src= {imageurl}/>
    <div>{name}</div>
    <p>{description}</p>
        </div>
    )
}
export default WatchCard