import Header from '../composants/Header';
import Main from '../composants/Main';
import Aside from '../composants/Aside';
import { TacheContext } from "../utils/context/tacheContext";

import { useState, useEffect, useContext } from 'react';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(true);
  }, []);

  //CRUD
  //GET request
  const { listTache, setListTache, setDataLoading } = useContext(TacheContext);
  useEffect(() => {
    setDataLoading(true)
    fetch(`http://localhost:3003/taches`)
      .then((response) => response.json())
      .then((surveyData) => {
        setListTache(surveyData)
        setDataLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])
  
  // POST request
  const tachePost = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("titre", (document.getElementById('titre').value).trim());
    formData.append("statut", document.getElementById('statut').value);
    formData.append("image", document.getElementById('image').files[0]);
    formData.append("idUser", window.localStorage.getItem('idUser'));

    fetch(`http://localhost:3003/taches`, {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Données ajoutées avec succès :', responseData);
        alert("Tâche ajoutée avec succès");
        window.location.href = "/acceuil/tache";
      })
      .catch((error) => console.log(error));
  };

  // PUT request
  const tacheUpdate = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("titre", (document.getElementById('titreM').value).trim());
    formData.append("statut", document.getElementById('statutM').value);
    formData.append("image", document.getElementById('imageM').files[0]);

    const tacheToUpdate = listTache.find((tache) => tache.titre === (document.getElementById("titreM").value).trim() && tache.idUser === window.localStorage.getItem('idUser'));
    if (tacheToUpdate && tacheToUpdate._id) {
      const id = tacheToUpdate._id;

      fetch(`http://localhost:3003/taches/${id}`, {
        method: 'PUT',
        body: formData,
      })
        .then((response) => response.json())
        .then((jsonData) => {
          console.log('Données mises à jour avec succès:', jsonData);
          alert("Tâche mise à jour avec succès");
          window.location.href = "/acceuil/tache";
        })
        .catch((error) => console.error('Erreur lors de la mise à jour des données:', error));
    } else {
      alert('Tâche non trouvée.');
    }
  };

  //DELETE request
  const tacheDelete = () => {

    const tacheToDelete = listTache.find((tache) => tache.titre === (document.getElementById("titreS").value).trim() && tache.idUser === window.localStorage.getItem('idUser'));
    if (tacheToDelete && tacheToDelete._id) {
      const id = tacheToDelete._id;

      fetch(`http://localhost:3003/taches/${id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            console.log('Données supprimées avec succès');
            alert("Tâche supprimée avec succès");
            window.location.href = "/acceuil/tache";
          } else {
            console.log('Erreur lors de la suppression des données');
          }
        })
        .catch((error) => console.log(error));
    } else {
      alert('Tâche non trouvée.');
    }

  };

  //Déconnexion
  const deconnexion = () => {
    window.localStorage.removeItem("idUser");
    window.localStorage.removeItem("user");
    window.location.href = "/";    
  }

  return (
    <div className="App">
      <Header />
      <div className='d-flex flex-lg-row flex-column'>
        <Main setIsClicked={setIsClicked} />
        <Aside isClicked={isClicked} />
      </div>

      {/* Offcanvas */}
      <div class="offcanvas offcanvas-end" tabindex="-1" id="profilUser" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel"> {window.localStorage.getItem("user")}  </h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column align-items-between">
          <div>
            <div className="card btn btn-outline-dark p-3"></div>
            <div className="card btn btn-outline-dark p-3"></div>
            <div className="card btn btn-outline-dark p-3"></div>
            <div className="card btn btn-outline-dark p-3"></div>
            <div className="card btn btn-outline-dark p-3"></div> 
          </div>
          <div className='d-flex justify-content-center mt-3'>
            <button className='btn btn-dark' onClick={deconnexion}>
              Déconnexion
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* Ajout */}
      <div class="modal fade" id="ajoutModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel"> Ajouter une nouvelle tâche </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form action="form" enctype="multipart/form-data">
                <div>
                  <label htmlFor="titre" className='form-label'> Titre </label>
                  <input type="text" name="titre" id="titre" className='form-control' />
                </div>
                <div>
                  <label htmlFor="statut" className='form-label'> Statut </label>
                  <input type="text" name="statut" id="statut" className='form-control' value="Non completée" readOnly />
                </div>
                <div>
                  <label htmlFor="image" className='form-label'> Image  </label>
                  <input type="file" name="image" id="image" className='form-control' />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
              <button type="button" class="btn btn-primary" onClick={tachePost}> Envoyer </button>
            </div>
          </div>
        </div>
      </div>
      {/* Suppression */}
      <div class="modal fade" id="supprimeModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel"> Supprimer une tâche </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div>
                <label htmlFor="titreS" className='form-label'> Titre </label>
                <input type="text" name="titreS" id="titreS" className='form-control' />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
              <button type="button" class="btn btn-primary" onClick={tacheDelete}> Supprimer </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mise à jour */}
      <div class="modal fade" id="updateModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel"> Mettre à jour une tâche </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div>
                <label htmlFor="titreM" className='form-label'> Titre </label>
                <input type="text" name="titreM" id="titreM" className='form-control' />
              </div>
              <div>
                <label htmlFor="statutM" className='form-label'> Statut </label>
                <select name="statutM" id="statutM" className='form-select'>
                  <option value="Completée"> Completée </option>
                  <option value="Non completée"> Non completée </option>
                </select>
              </div>
              <div>
                <label htmlFor="imageM" className='form-label'> Image  </label>
                <input type="file" name="imageM" id="imageM" className='form-control' />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
              <button type="button" class="btn btn-primary" onClick={tacheUpdate}> Modifier </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
