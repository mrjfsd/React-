import React from 'react';


function Main() {
    return (
        <div>
            <body>
                <h1>Login Form</h1>
                <div class="login">
                    <form class="logg" action="demo.html">
                        <label>Email Id</label><br />
                        <input type="email" name="Email Id" class="lo" required placeholder="Example@gmail.com" /> <br />
                        <br /><span class="error"><p id="email_error"></p></span>
                        <label>Password</label><br />
                        <input type="password" name="Password" class="lo" />
                        <br/> <br/>
                            <button type="submit" name="submit" value="Submit" required class="but">Submit</button> <br/>
                                <br/>
                                    <a class="but" href="reg.html">Register</a>

                                </form>
                            </div>

                        </body>
                        </div>
                        )
}
                        
export default Main;