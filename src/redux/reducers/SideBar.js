import React from 'react'
import SideBar from '../../components/side_bar/SideBar'
import '../../components/side_bar/SideBar.scss'
const intialState = [
    {
        id : 0,
        name : 'Vente',
        submenu:[
            {name:"Gestion client"},
            {name : "Gestion des représentant"},
            {name:"Commande client et devis"},
            {name : "Facturation à terme"},
            {name :"Facturation au comptant"},
            {name :"Etats de vente"},
            {name :"Statistique de vente"},
            {name :"Rapport d'activité"}

        ],
        icon : <i className="far fa-money-bill-alt"></i>
    },
    {
        id : 1,
        name : 'Gestion des stocks',
        submenu:[
            {name :"Nomenclature"},
            {name :"Gestion des articles"},
            {name :"Mouvements du stock "},
            {name :"Gestion des inventaires"},
        ],
        icon : <i className="fas fa-cubes"></i>

    },
    {
        id : 0,
        name : 'Suivi clientèle',
        submenu:[
            {name :"Nomenclature"},
            {name :"Gestion des articles"},
            {name :"Mouvements du stock "},
            {name :"Gestion des inventaires"},
        ],
        icon : <i className="fas fa-clipboard-list"></i>
    },
    {
        id : 0,
        name : 'Achat ',
        icon : <i className="fas fa-shopping-cart"></i>
    },
    {
        id : 0,
        name : 'gestion de caisse',
        submenu:[
            {name :"Mouvement du caisse"},
            {name :"Gestion des articles"},
            {name :"Mouvements du stock "},
            {name :"Gestion des inventaires"},
        ],
        icon : <i className="fas fa-cash-register"></i>
    }
]
const SideBarReducer = (state = intialState, action)=>{
    return state
}
export default SideBarReducer;