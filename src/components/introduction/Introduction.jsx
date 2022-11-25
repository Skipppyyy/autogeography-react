import React from 'react';
import './introductionstyles.css';

const Introduction = () => {
    return (
        <div name='intro' className='intro'>
            <div className='container'>
                <div className='top'> 
                    <h1>Introduction</h1>
                </div>

                <div className='textbox'>
                    <h3>&emsp;&emsp;Pals, Spain is a small medieval town two hours north of Barcelona. My family and I visited it in June 2022, as part of a two-week long trip through Spain and Portugal. We arrived at Pals after spending three nights in Barcelona. A family of history nuts, we were hoping to genuinely experience Spanish history and culture away from tourist hotspots. Indeed, most cities around the world inflate the grandeur of their historical landmarks in order to attract visitors. This was the case in Barcelona, where plaques on monuments such as the Sagrada Familia told shocking stories about Antoni Gaudi’s life and the building’s extravagant architecture, but hardly mentioned “less interesting” aspects such as the daily lives of workers and controversies around its construction. When we arrived in Pals, we immediately understood that the town was different from its counterparts–not because it had flashier buildings or older landmarks–but because it was almost completely empty. Indeed, Pals is not known for anything special. Ironically, this was what made it unique. It was a regular place that pushed me to think of the regular people that had lived there.</h3>
                </div>
            </div>
        </div>
    )
}

export default Introduction; 