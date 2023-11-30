// import react from "react";
import '../App.css';
function Project() {

    return (
        <>

            <div class="container">
                <div class="row">
                    <div class="col-2">
                    </div>
                    <div class="col-sm">
                        <h1 class="text-left mb-4">What I've been working on</h1>
                        <p class="text-left">I like to stay busy and always have a project in my hands.</p>
                        <p class="text-left"> Take a look at some of the applications I've dedicated my time to.</p>
                        <h3 class="text-left m- 4 pt-4">Forecast</h3>
                        <img src="climate.png" alt="proj1" width="100%" height={300}></img>
                        <p class="text-left mt-4">A 7 day weather application that sets weather data based on user input. Building projects from scratch has always been my favorite way to improve my understanding and expand my knowledge. In this project, I utilized OpenWeatherMap API to get the weather data based on the user's location.</p>
                        <a href="https://climateprediction.netlify.app/" rel="noreferrer" target="_blank" class="me-4 text-reset" color="black">
                            <h5 class="text-left mt-4">VIEW PROJECT </h5>
                        </a>

                        {/* Project2 */}

                        <h3 class="text-left m- 4 pt-4">Admin Dashboard </h3>
                        <img src="Reactgrid.png" alt="proj1" width="100%" height={300} href="https://grid-react-application.netlify.app/"></img>
                        <p class="text-left mt-4">An ADMIN DASHBOARD which provides information about the users where the admin can like, edit, and delete the user based on the requirement using technology stacks such as Reactjs, JavaScript, Html, CSS, material UI, bootstrap, and ES6.</p>
                        
                        <a href="https://grid-react-application.netlify.app/" rel="noreferrer" target="_blank" class="me-4 text-reset" style={{color: "black"}}>
                        <h5 class="mt-4 text-left">VIEW PROJECT </h5>
                        </a>
                      
                        {/* Project3 */}

                        <h3 class="text-left m- 4 pt-4 ">Ticket Booking</h3>
                        <img src="ticketBooking.png" alt="proj1" width="100%" height={300} class = "zoom"></img>
                        <p class="text-left mt-4">A simple ticket booking App developed using Vanilla JS where the user can select and deselect the number of seats as per the requirement. Additionally, added local storage to persist the data even after the refresh.</p>
                        <a href="https://jsticketbooking.netlify.app/" rel="noreferrer" target="_blank" class="me-4 text-reset" >
                            <h5 class="text-left mt-4">VIEW PROJECT </h5>
                        </a> 
                                          </div>
                    <div class="col-2">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;

