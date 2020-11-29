import React from "react"
import ValidationError from "./validationError"
import AuthApiService from "./services/auth-api-service"
import TokenService from "./services/token-service.js"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: {
                value: "",
                touched: false,
            },
            password: {
                value: "",
                touched: false,
            },
            LogInUserID: 0,
            error: null,
        };
    }

    changeUsername(userName) {
        this.setState({
            userName: { value: userName },
        });
    }

    changePassword(password) {
        this.setState({
            password: { value: password },
        });
    }

    validateUserName() {
        const userName = this.state.userName.value.trim();
        if (userName.length === 0) {
            return <p className="input-error">Username is required</p>;
        } else if (userName.length < 2) {
            return (
                <p className="input-error">
                    Username must be at least 2 characters long
                </p>
            );
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
            return <p className="input-error">Password is required</p>;
        } else if (password.length < 6 || password.length > 72) {
            return (
                <p className="input-error">
                    Password must be between 6 and 72 characters long
                </p>
            );
        } else if (!password.match(/[0-9]/)) {
            return (
                <p className="input-error">
                    Password must contain at least one number
                </p>
            );
        }
    }

    loginUser = (event) => {
        event.preventDefault();
        const { userName, password } = event.target;
        //console.log("username:", userName.value, "password:", password.value);
        AuthApiService.postLogin({
            user_name: userName.value,
            password: password.value,
        })

            .then((response) => {
               // console.log("response ID", response);
                // userName.value = "";
                // password.value = "";
                TokenService.saveAuthToken(response.authToken);
                TokenService.saveUserId(response.userId);
                window.location = "/diet/show/";
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        return (
            <div className="Login">
                <section id="loginPage">
                    <h2>Login</h2>
                    <p className = "demo">To view a demo:</p>
                    <p className = "demo">email: JohnySmith</p>
                    <p className = "demo">password: 123456</p>

                    <form className="loginForm" onSubmit={this.loginUser}>
                        <label htmlFor="userName">Username</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            placeholder="Username"
                            onChange={(e) =>
                                this.changeUsername(e.target.value)
                            }
                            required
                        />
                        {this.state.userName.touched && (
                            <ValidationError
                                message={this.validateUserName()}
                            />
                        )}
                        <label htmlFor="password">Password</label>
                        <input
                            type="Password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) =>
                                this.changePassword(e.target.value)
                            }
                            required
                        />
                        {this.state.password.touched && (
                            <ValidationError
                                message={this.validatePassword()}
                            />
                        )}
                        <button
                            className="go-button"
                            type="submit"
                        >
                            Go
                        </button>
                        <div className="signUp">
                            <p>
                                Do not have an account?{" "}
                                <a href="/signup">Sign up here</a>
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

export default Login;
