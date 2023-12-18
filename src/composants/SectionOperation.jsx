import Operation from "./Operation";
import create from '../images/plus-square-line-icon.png';
import visualise from '../images/project-icon.png'
import delete_ from '../images/recycle-bin-line-icon.png'
import update from '../images/forward-restore-icon.png'

import { Link } from "react-router-dom";
import { useContext } from "react";
import { TacheContext } from "../utils/context/tacheContext";

function SectionOperation() {

    const { setOnTache } = useContext(TacheContext);

    return (
        <section className=" rounded-0 p-lg-5 p-2">
            <h4 className="mb-lg-5 mb-2">
                Bienvenue !  <br />
                Qu'aimerez vous faire ?
            </h4> 

            <div className="d-flex flex-wrap flex-lg-row justify-content-around align-items-center align-items-stretch">
                <Operation lien={create} description={"Ajouter une nouvelle tâche à la liste."} operation={"Créer une nouvelle tâche"} target_={"ajoutModal"} />
                <div class="card p-1" style={{ width: "12rem" }}>
                    <img src={visualise} className="m-auto" alt="" width={30} height={30} />
                    <div class="card-body">
                        <p class="card-text"> Consulter la liste des tâches existantes. </p>
                        <div className='d-flex justify-content-around'>
                            <Link to={"/acceuil/tache"}>
                                <button class="btn btn-outline-dark" onClick={() => setOnTache(true)}> Visualiser les tâches </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Operation lien={delete_} description={"Supprimer une tâche de la liste."} operation={"Supprimer une tâche"} target_={"supprimeModal"} />
                <Operation lien={update} description={"Mettre à jour une tâche de la liste."} operation={"Modifier une tâche"} target_={"updateModal"} />
            </div>
        </section >
    )
}

export default SectionOperation;