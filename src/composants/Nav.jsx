import { useContext, useState } from "react";
import { TacheContext } from "../utils/context/tacheContext";

export function Nav1() {
    return (
        <nav className="navbar bg-dark p-4">

        </nav>
    )
}

export function Nav2() {

    const { listTache, setListTache } = useContext(TacheContext);

    // function setList() {
    //     const valeur = document.getElementById("statusTache").value;
    //     if (valeur === "tout") {
    //         setListTache(listTache)
    //     } else if (valeur === "completée") {
    //         setListTache(listTache.filter(tache => tache.statut === "Completée"))
    //     } else if (valeur === "non-completée") {
    //         setListTache(listTache.filter(tache => tache.statut === "Non completée"))
    //     }
    // }

    // function sortList() {
    //     const valeur = document.getElementById("trie").value;
    //     const list = [...listTache];
    //     if (valeur === "A-Z") {
    //         setListTache(list.sort((a, b) => a.titre.localeCompare(b.titre)));
    //     } else if (valeur === "Z-A") {
    //         setListTache(list.sort((a, b) => b.titre.localeCompare(a.titre)));
    //     }
    // }

    // function searchByTitre() {
    //     const valeur = document.getElementById("nomTache").value;
    //     if(valeur === ""){
    //         setListTache(listTache);
    //     }else{
    //         setListTache(listTache.filter(tache => tache.titre.startsWith(document.getElementById("nomTache").value)));
    //     }
    // }

    return (
        <nav className="navbar bg-dark d-flex justify-content-end p-2 order-lg-1 order-2">
            <div className="d-flex justify-content-center align-items-center">
                <label htmlFor="nomTache" className="form-label text-light fw-bold m-1"> Nom </label>
                <input type="text" name="nomTache" id="nomTache" className="form-control" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <label htmlFor="statusTache" className="form-label text-light fw-bold m-1"> Statut </label>
                <select name="statusTache" id="statusTache" className="form-select" >
                    <option value="tout"> tout </option>
                    <option value="completée"> completée </option>
                    <option value="non-completée"> non completée </option>
                </select>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <label htmlFor="trie" className="form-label text-light fw-bold m-1"> Trie </label>
                <select name="trie" id="trie" className="form-select" >
                    <option value="A-Z"> A-Z </option>
                    <option value="Z-A"> Z-A </option>
                </select>
            </div>
        </nav>
    );
}
