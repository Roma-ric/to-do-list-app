import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../utils/context/userContext";

function SignIn() {

    const { listUser, setListUser } = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:3003/users`)
            .then((response) => response.json())
            .then((surveyData) => {
                setListUser(surveyData)
            })
            .catch((error) => console.log(error))
    }, [])

    const connexion = (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const user = listUser.find(user => user.email === email && user.password === password);
        if (user) {
            window.localStorage.setItem("idUser", user._id);
            window.localStorage.setItem("user", user.nom + " " + user.prenom);
            window.location.href = "/acceuil/operation";
        } else {
            alert(" le couple adresse mail / mot de password incorrect");
        }
    }

    return (
        <div>
            <div className="p-lg-5 p-1 d-flex flex-column justify-content-center align-items-center h-100">
                <form className="form bg-light p-lg-3 p-2 shadow-lg col-lg-4 col-12 rounded-3" onSubmit={connexion}>
                    <h3 className="text-center"> Connexion </h3>
                    <h6> Bienvenue sur notre site Web </h6>
                    <p> Pour vous connecter, veuillez saisir vos informations d'identification ci-dessous. </p>
                    <div className="mb-3">
                        <input type="email" name="email" id="email" className="form-control" placeholder="Adresse email" />
                    </div>
                    <div className="mb-3">
                        <input type="password" name="password" id="password" className="form-control" placeholder="Mot de passe" />
                    </div>
                    <button className="btn btn-dark w-100 mb-3"> Se connecter </button>
                    <Link to={"/inscription"}> <p className="text-decoration-underline text-primary"> Vous n'avez pas encore un compte ? </p> </Link>
                    <div className="mb-3 d-flex justify-content-around">
                        <hr className="col-5" />
                        <p className="m-1"> ou  </p>
                        <hr className="col-5" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="row gx-4">
                            <div className="col-auto">
                                <div className="card rounded-circle p-2 d-flex d-flex align-items-center bd-light" style={{ width: "40px", height: "40px", backgroundColor: "blue" }}>  </div>
                            </div>
                            <div className="col-auto">
                                <div className="card rounded-circle p-2 d-flex d-flex align-items-center bg-danger" style={{ width: "40px", height: "40px" }}>  </div>
                            </div>
                            <div className="col-auto">
                                <div className="card rounded-circle p-2 d-flex d-flex align-items-center bg-dark" style={{ width: "40px", height: "40px" }}>  </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;