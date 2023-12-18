import Tache from "./Tache";
import { useContext } from "react";
import { TacheContext } from "../utils/context/tacheContext";

function SectionTache() {

    const { listTache, isDataLoading } = useContext(TacheContext);
    const listUserTache = listTache.filter(tache => tache.idUser === window.localStorage.getItem("idUser"));

    return (
        <section className="p-2 p-lg-5 d-flex flex-wrap flex-lg-row justify-content-around align-items-center align-items-stretch">
            {
                isDataLoading ?
                    <div className="d-flex flex-wrap flex-lg-row flex-column justify-content-around align-items-center align-items-stretch">
                        <div class="card mb-3" aria-hidden="true" style={{ width: "260px" }}>
                            <img src="..." class="card-img-top placeholder" alt="..." width={"100%"} height={150} />
                            <div class="card-body">
                                <h5 class="card-title placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                </h5>
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-7"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                                <div className="d-flex justify-content-center">
                                    <a href="#" tabindex="-1" class="btn btn-dark disabled placeholder col-6"></a>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3" aria-hidden="true" style={{ width: "260px" }}>
                            <img src="..." class="card-img-top placeholder" alt="..." width={"100%"} height={150} />
                            <div class="card-body">
                                <h5 class="card-title placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                </h5>
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-7"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                                <div className="d-flex justify-content-center">
                                    <a href="#" tabindex="-1" class="btn btn-dark disabled placeholder col-6"></a>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3" aria-hidden="true" style={{ width: "260px" }}>
                            <img src="..." class="card-img-top placeholder" alt="..." width={"100%"} height={150} />
                            <div class="card-body">
                                <h5 class="card-title placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                </h5>
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-7"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                                <div className="d-flex justify-content-center">
                                    <a href="#" tabindex="-1" class="btn btn-dark disabled placeholder col-6"></a>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3" aria-hidden="true" style={{ width: "260px" }}>
                            <img src="..." class="card-img-top placeholder" alt="..." width={"100%"} height={150} />
                            <div class="card-body">
                                <h5 class="card-title placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                </h5>
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-7"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                                <div className="d-flex justify-content-center">
                                    <a href="#" tabindex="-1" class="btn btn-dark disabled placeholder col-6"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    listUserTache.map((element, index) => <Tache key={index} image={element.image} titre={element.titre} statut={element.statut} />)
            }
        </section>
    )
}

export default SectionTache;