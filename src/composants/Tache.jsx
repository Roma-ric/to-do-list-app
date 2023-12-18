
function Tache({ image, titre, statut }) {
    return (
        <div class="card mb-3 " style={{ width: "15rem" }}>
            <img src={image} className="m-auto" alt="" width={""} height={100} />
            <div class="card-body d-flex flex-column justify-content-between">
                <p class="card-text">
                    Titre: <span className="fw-bold"> {titre} </span> <br />
                    Statut:  {
                        statut === "Completée" ?
                            <span className="fw-bold text-success"> {statut} </span>
                            :
                            <span className="fw-bold text-danger"> {statut} </span>
                    }
                </p>
                <div className='d-flex justify-content-around'>
                    <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target={"#updateModal"}> Mettre à jour </button>
                </div>
            </div>
        </div>
    )
}

export default Tache;