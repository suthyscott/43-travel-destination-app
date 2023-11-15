import "./AddDest.css"
import { useState } from "react"

const AddDest = ({ addDestination }) => {
    const [destName, setDestName] = useState("")
    const [notes, setNotes] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [international, setInternational] = useState(false)

    const submitHandler = e => {
        e.preventDefault()
        const bodyObj = {
            name: destName,
            notes,
            imageURL,
            international
        }
        addDestination(bodyObj)
    }

    return (
        <form id="add-dest-container" onSubmit={e => submitHandler(e)}>
            <input placeholder="name" onChange={e => setDestName(e.target.value)} />
            <input
                placeholder="notes about your destination"
                onChange={e => setNotes(e.target.value)}
            />
            <input
                placeholder="Image URL"
                onChange={e => setImageURL(e.target.value)}
            />
            <input
                type="checkbox"
                checked={international}
                onChange={() => setInternational(!international)}
            />
            <button>Add Destination</button>
        </form>
    )
}

export default AddDest
