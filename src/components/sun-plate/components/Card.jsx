const Card = (props) => {  
    return (
        <div className={`bg-white rounded-md shadow text-black ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Card;