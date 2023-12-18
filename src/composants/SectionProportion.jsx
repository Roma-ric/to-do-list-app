import { Chart } from "chart.js/auto";
import { useEffect, useContext } from "react";
import { TacheContext } from "../utils/context/tacheContext";

function SectionProportion() {

    const { listTache, isDataLoading } = useContext(TacheContext);
    const listUserTache = listTache.filter(tache => tache.idUser === window.localStorage.getItem("idUser"));

    useEffect(() => {
        const existingChart = Chart.getChart("startChart");

        // Si un graphique existe, détruisez-le
        if (existingChart) {
            existingChart.destroy();
        }

        const dataCompletee = [
            { mois: "Janvier", valeur: 0 },
            { mois: "Février", valeur: 0 },
            { mois: "Mars", valeur: 0 },
            { mois: "Avril", valeur: 0 },
            { mois: "Mai", valeur: 0 },
            { mois: "Juin", valeur: 0 },
            { mois: "Juillet", valeur: 0 },
            { mois: "Août", valeur: 0 },
            { mois: "Septembre", valeur: 0 },
            { mois: "Octobre", valeur: 0 },
            { mois: "Novembre", valeur: 0 },
            { mois: "Décembre", valeur: listUserTache.filter(tache => tache.statut === "Completée").length },
        ];
        const dataNoCompletee = [
            { mois: "Janvier", valeur: 0 },
            { mois: "Février", valeur: 0 },
            { mois: "Mars", valeur: 0 },
            { mois: "Avril", valeur: 0 },
            { mois: "Mai", valeur: 0 },
            { mois: "Juin", valeur: 0 },
            { mois: "Juillet", valeur: 0 },
            { mois: "Août", valeur: 0 },
            { mois: "Septembre", valeur: 0 },
            { mois: "Octobre", valeur: 0 },
            { mois: "Novembre", valeur: 0 },
            { mois: "Décembre", valeur: listUserTache.filter(tache => tache.statut === "Non completée").length },
        ];

        // Le graphe
        new Chart(
            document.getElementById('startChart'),
            {
                type: 'bar',
                data: {
                    labels: dataCompletee.map(row => row.mois),
                    datasets: [
                        {
                            label: 'Tâche completée',
                            data: dataCompletee.map(row => row.valeur)
                        },
                        {
                            label: 'Tâche non completée',
                            data: dataNoCompletee.map(row => row.valeur)
                        }
                    ]
                }
            }
        );

    }, []);

    return (
        <section className="p-3">
            {
                isDataLoading ?
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    :
                    <canvas id="startChart"> </canvas>
            }
        </section>
    )
}

export default SectionProportion;