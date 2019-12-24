import React from 'react'
import SideBar from '../../components/side_bar/SideBar'

const intialState = [
    {
        id : 0,
        name : 'Vente',
        submenu:[
            "Gestion client",
            "Gestion des représentant",
            "Commande client et devis",
            "Facturation à terme",
            "Facturation au comptant",
            "Etats de vente",
            "Statistique de vente",
            "Rapport d'activité"

        ]
    },
    {
        id : 1,
        name : 'Gestion des stocks',
        submenu:[
            "Nomenclature",
            "Gestion des articles",
            "Mouvements du stock ",
            "Gestion des inventaires",
        ]

    },
    {
        id : 0,
        name : 'Suivi clientèle',
        submenu:[
            "Nomenclature",
            "Gestion des articles",
            "Mouvements du stock ",
            "Gestion des inventaires",
        ]
    },
    {
        id : 0,
        name : 'Achat '
    },
    {
        id : 0,
        name : 'gestion de caisse',
        submenu:[
            "Mouvement du caisse",
            "Gestion des articles",
            "Mouvements du stock ",
            "Gestion des inventaires",
        ]
    }
]
const SideBarReducer = (state = intialState, action)=>{
    return state
}
export default SideBarReducer;