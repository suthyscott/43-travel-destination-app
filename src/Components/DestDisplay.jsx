import "./DestDisplay.css"
import DestCard from "./DestCard"

const DestDisplay = ({ destinations, deleteDestination }) => {
    return (
        <div id="dest-display-container">
            {destinations.map((dest, index) => {
                return (
                    <DestCard
                        key={dest.id}
                        dest={dest}
                        deleteDestination={deleteDestination}
                    />
                )
            })}
        </div>
    )
}

export default DestDisplay
