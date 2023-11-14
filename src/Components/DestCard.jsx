import './DestCard.css'

const DestCard = ({ dest, deleteDestination }) => {
    return (
        <div className='dest-card-container'>
            <h2>Destination: {dest.name}</h2>
            <p>Interational: {dest.international ? "yes" : 'no'}</p>
            <p>{dest.notes}</p>
            <img  src={dest.imageURL}/>
            <button onClick={() => deleteDestination(dest.id)}>Delete</button>
        </div>
    )
}

export default DestCard
