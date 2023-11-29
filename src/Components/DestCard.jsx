import "./DestCard.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const DestCard = ({ dest, deleteDestination, editDestination }) => {
    const navigate = useNavigate()
    const [editing, setEditing] = useState(false)
    const [name, setName] = useState(dest.name)
    const [notes, setNotes] = useState(dest.notes)
    const [imageURL, setImageURL] = useState(dest.imageURL)
    const [international, setInternational] = useState(dest.international)

    // 7 === '7' ? console.log(true) : console.log(false)

    const handleSubmit = e => {
        e.preventDefault()
        const editedData = {
            name, 
            notes, 
            imageURL,
            international
        }
        editDestination(dest.id, editedData)
        setEditing(false)
    }

    return !editing ? (
        <div className="dest-card-container">
            <h2>Destination: {dest.name}</h2>
            <img src={dest.imageURL} />
            <button onClick={() => navigate(`/details/${dest.id}`)}>View Details</button>
            {/* <button onClick={() => deleteDestination(dest.id)}>Delete</button>
            <button onClick={() => setEditing(true)}>Edit</button> */}
        </div>
    ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input placeholder="name" value={name} onChange={e => setName(e.target.value)} />
            <input
                placeholder="notes about your destination"
                onChange={e => setNotes(e.target.value)}
                value={notes}
            />
            <input
                placeholder="Image URL"
                onChange={e => setImageURL(e.target.value)}
                value={imageURL}
            />
            <input
                type="checkbox"
                checked={international}
                onChange={() => setInternational(!international)}
            />
            <button>Save</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
        </form>
    )
}

export default DestCard
