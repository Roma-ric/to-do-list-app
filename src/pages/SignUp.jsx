import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {

    const [etatNom, setEtatNom] = useState(true);
    const [etatPrenom, setEtatPrenom] = useState(true);
    const [etatEmail, setEtatEmail] = useState(true);
    const [etatPassword, setEtatPassword] = useState(true);
    const [etatConfirmPassword, setEtatConfirmPassword] = useState(true);
    //const [etatButtonSignUp, setEtatButtonSignUp] = useState(false);

    const verifyNom = () => {
        const nom = document.getElementById('nom').value;
        let expReg = new RegExp("^[a-zA-Z]+$");
        if (expReg.test(nom)) {
            setEtatNom(true);
        } else {
            setEtatNom(false);
        }
    }

    const verifyPrenom = () => {
        const prenom = document.getElementById('prenom').value;
        let expReg = new RegExp("^[a-zA-Z]+$");
        if (expReg.test(prenom)) {
            setEtatPrenom(true);
        } else {
            setEtatPrenom(false);
        }
    }

    const verifyEmail = () => {
        const email = document.getElementById('email').value;
        let expReg = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
        if (expReg.test(email)) {
            setEtatEmail(true);
        } else {
            setEtatEmail(false);
        }
    }

    const verifyPassword = () => {
        const password = document.getElementById('password').value;
        let expReg = new RegExp("^[a-zA-Z0-9]+$");
        if (expReg.test(password)) {
            setEtatPassword(true);
        } else {
            setEtatPassword(false);
        }
    }

    const verifyConfirmPassword = () => {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password === confirmPassword) {
            setEtatConfirmPassword(true);
        } else {
            setEtatConfirmPassword(false);
        }
    }

    /*() => {
        if (etatNom && etatPrenom && etatEmail && etatPassword && etatConfirmPassword) {
            setEtatButtonSignUp(true);
        } else {
            setEtatButtonSignUp(false);
        }
    }*/

    //POST request
    const userPost = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3003/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "nom": document.getElementById('nom').value,
                "prenom": document.getElementById('prenom').value,
                "email": document.getElementById('email').value,
                "password": document.getElementById('password').value,
            }),
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log('Données ajoutées avec succès :', responseData);
                alert("Inscription réussi.");
                window.location.href = "/";
            })
            .catch((error) => {
                console.error(error);
                alert("Inscription échouée. Veillez reprendre svp!");
                window.location.reload();
            });
    };

    return (
        <div className="p-lg-5 p-1 d-flex flex-column justify-content-center align-items-center h-100">
            <form className="form bg-light p-lg-3 p-2 shadow-lg col-lg-4 col-12 rounded-3" onSubmit={userPost}>
                <h3 className="text-center"> Inscription </h3>
                <p> Pour créer un compte, veuillez saisir les informations ci-dessous </p>
                <hr />
                <div className="mb-3">
                    <input type="text" name="nom" id="nom" className="form-control " placeholder="Nom" onInput={verifyNom} />
                    {
                        etatNom ? null : <p className="text-danger"> Le nom doit contenir que des lettres </p>
                    }
                </div>
                <div className="mb-3">
                    <input type="text" name="prenom" id="prenom" className="form-control" placeholder="Prénom" onInput={verifyPrenom} />
                    {
                        etatPrenom ? null : <p className="text-danger"> Le prénom doit contenir que des lettres </p>
                    }
                </div>
                <div className="mb-3">
                    <input type="email" name="email" id="email" className="form-control" placeholder="Adresse email" onInput={verifyEmail} />
                    {
                        etatEmail ? null : <p className="text-danger"> Le format d'une adresse e-mail n'est pas respecté </p>
                    }
                </div>
                <div className="mb-3">
                    <input type="password" name="password" id="password" className="form-control" placeholder="Mot de passe" onInput={verifyPassword} />
                    {
                        etatPassword ? null : <p className="text-danger"> Le mot de passe ne doit pas contenir de caractère spéciaux (`!@#$%^&*_+...) </p>
                    }
                </div>
                <div className="mb-3">
                    <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" placeholder="Confirmer votre mot de passe" onInput={verifyConfirmPassword} />
                    {
                        etatConfirmPassword ? null : <p className="text-danger"> Le mot de passe doit être le même que le précédent </p>
                    }
                </div>
                {
                    // etatButtonSignUp ? <button className="btn btn-dark w-100 mb-3"> S'inscire </button> : <button className="btn btn-dark w-100 mb-3" disabled> S'inscire </button>
                }
                <button className="btn btn-dark w-100 mb-3"> S'inscire </button>
                <Link to={"/"}> <p className="text-decoration-underline text-primary"> Vous avez déjà un compte ? </p> </Link>
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
    );
}

export default SignUp;