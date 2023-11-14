import './DestDisplay.css'
import DestCard from './DestCard'

const DestDisplay = ({destinations}) => {
    return (
        <div id="dest-display-container">
            {destinations.map((dest, index) => {
                return <DestCard dest={dest}/>
            })}
        </div>
    )
}

export default DestDisplay