const Card = ({title, image, description}) => {
    return(
        <div className="app-card">
            <div>
                <img src={image} alt={title} width="128px" height="128px" className="App-logo" />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card