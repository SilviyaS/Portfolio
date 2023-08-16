// import react from "react";
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
                        <img src = "blog1.jpg" alt = "proj1" width= "100%" height={300}></img>
                        <p class = "text-left mt-4">A 5 day weather application that sets weather data based on user input.</p>
                         <h5 class = "text-left mt-4">VIEW PROJECT </h5>

                         {/* Project2 */}

                        <h3 class="text-left m- 4 pt-4">Taskify</h3>
                        <img src = "blog1.jpg" alt = "proj1" width= "100%" height={300}></img>
                        <p class = "text-left mt-4">A simple todo app built using React and Javascript.</p>
                         <h5 class = "text-left mt-4">VIEW PROJECT </h5>
                    </div>
                    <div class="col-2">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;