import React from 'react';
import './mestyles.css';

const Me = () => {
    return (
        <div name="me" className="me">
            <div className="container"> 
                <div className="top">
                    <h1>About Me</h1>
                </div>

                <div className="cred">
                    Ethan Shen, Student at the Paul G. Allen School of Computer Science
                </div>

                <div className="textbox">
                    <h3>For many people, it’s a dream to live in a center of innovation, where the tiresome old becomes displaced by an exciting new. Growing up in Seattle, I was always surrounded by this spirit. My dad worked as a software engineer for Amazon in its heyday, then Yahoo!, and finally the University of Washington. My mom was a data analyst for the federal government. On the way to school, I would often pass by the Microsoft or T-Mobile headquarters sprawled under the cloudy sky. Tech dominated my life. </h3>
                    <p></p>
                    <br></br>
                    <h3>Yet, the new age of technology hides a competitive undercurrent, especially for students. For many of my peers and I, being surrounded by overwhelming amounts of success meant an enormous pressure to excel. As a result, while we would watch films glamorizing a traditional adolescence full of social and personal exploration, we lived in a reality that was dominated by academic pressure. Entering high school, I noticed that for many of my peers, learning had become more about earning the highest grades than genuine curiosity. It seemed that normalcy was no longer acceptable.  
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Me;
