import React from 'react';
import './religionstyles.css';

const Religion = () => {
    return (
        <div name='religion' className='religion'> 
            <div className='container'>
                <div className='top'> 
                    <h1>Religion</h1>
                </div>
                
                <div className='textbox'>
                    <div className='exp'>
                        <h3>As we were preparing to leave, we stopped by a small, sunbeat church. It was called the Església de Sant Pere (St. Peter’s church) and was the first religious monument we had seen in the town. Given the historical prevalence of Christianity in Spain, the presence of a church in Pals was hardly a surprise. It was an affirmation that religion was engrained within the daily lives of Pals’ citizens.</h3>
                    </div>

                    <div className='hist'>
                        <h3>Indeed, in most of Medieval Europe the lives of people revolved around church. It was standard to attend church three to five times daily for prayer and service (Mark). Religion was particularly significant in Spain because of Spain’s mixed Muslim, Jewish, and Christian population. Consequently, religion not only influenced lifestyle in Spain, but also was a frequent source of conflict. Indeed, Jewish-Christian violence was extremely common (Smith 1). Unfortunately, these tensions that defined medieval life are slowly disappearing from memory. For example, behind the famous Cathedral of Barcelona lie the ruins of Barcelona's old Jewish quarter, forgotten and overshadowed by the Cathedral's modern touristic appeal (Horovitz). Today, the Girona region, where Pals is located, is one of the only areas in Spain where medieval Jewish influence remains readily visible.</h3>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Religion; 