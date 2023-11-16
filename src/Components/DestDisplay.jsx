import "./DestDisplay.css"
import DestCard from "./DestCard"

const DestDisplay = ({ destinations, deleteDestination, editDestination }) => {
    return (
        <div id="dest-display-container">
            {destinations.map((dest, index) => {
                return (
                    <DestCard
                        key={dest.id}
                        dest={dest}
                        deleteDestination={deleteDestination}
                        editDestination={editDestination}
                    />
                )
            })}
        </div>
    )
}

export default DestDisplay
