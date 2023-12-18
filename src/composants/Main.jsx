import operation from '../images/setting-line-icon.png';
import tache from '../images/project-icon.png';
import proportion from '../images/column-chart-line-icon.png'
import { Link } from 'react-router-dom';

import { useContext } from "react";
import { TacheContext } from "../utils/context/tacheContext";

function Main({ setIsClicked }) {
    const { setOnTache } = useContext(TacheContext);
    return (
        <main className="card bg-light col-lg-2 col-12 rounded-0 d-flex flex-lg-column flex-row justify-content-lg-start justify-content-center shadow-lg">
            <Link to={"/acceuil/operation"} className="text-decoration-none" onClick={() => { setIsClicked(true); setOnTache(false) }}>
                <div className="card btn btn-outline-dark rounded-0 p-2 d-flex flex-lg-row flex-column  justify-content-start">
                    <img src={operation} alt="" width={30} height={30} />
                    <h6 className='m-1'> Opération </h6>
                </div>
            </Link>

            <Link to={"/acceuil/tache"} className="text-decoration-none" onClick={() => { setIsClicked(true); setOnTache(true) }}>
                <div className="card btn btn-outline-dark rounded-0 p-2 d-flex flex-lg-row flex-column justify-content-start">
                    <img src={tache} alt="" width={30} height={30} />
                    <h6 className='m-1'> Liste des tâches </h6>
                </div>
            </Link>

            <Link to={"/acceuil/proportion"} className="text-decoration-none" onClick={() => { setIsClicked(true); setOnTache(false) }}>
                <div className="card btn btn-outline-dark rounded-0 p-2 d-flex flex-lg-row flex-column justify-content-start">
                    <img src={proportion} alt="" width={30} height={30} />
                    <h6 className='m-1'> Proportion </h6>
                </div>
            </Link>
        </main>
    );
}

export default Main;