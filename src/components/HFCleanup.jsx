import React, {useState} from 'react'
import HFMouse from './HFMouse'

function HFCleanup() {
    const [visivel, setVisivel] = useState(true);
    return (
        <div>
            <button onClick={() => setVisivel(!visivel)}>Visivel</button>
            {visivel &&
                <HFMouse></HFMouse>
            }
        </div>
    )
}

export default HFCleanup
