import Pokemon from "./Pokemon.js"

/**
 * Représente un joueur dans le jeu.
 */
export default class Player {
    // --- Propriétés privées ---

    /**
     * Nom du joueur.
     * @type {string}
     * @private
     */
    #name;

    /**
     * Identifiant unique du joueur (optionnel, non initialisé ici).
     * @type {number}
     * @private
     */
    #id;

    /**
     * Liste des Pokémon appartenant au joueur.
     * @type {Array<Pokemon>}
     * @private
     */
    #pokemon = [];

    // --- Constructeur ---
    
    /**
     * Crée une nouvelle instance de joueur avec un nom et une équipe de Pokémon.
     *
     * @param {string} name - Le nom du joueur.
     * @param {Array<Pokemon>} pokemon - La liste des Pokémon appartenant au joueur.
     */
    constructor(name, pokemon) {
        this.#name = name;
        this.#pokemon = pokemon;
    }



    // --- Getters ---

    /**
     * Retourne le nom de l'entité (par exemple, un joueur ou un dresseur).
     * @returns {string} - Le nom de l'entité.
     */
    get name() { return this.#name }

    /**
     * Retourne la liste des Pokémon associés à cette entité.
     * @returns {Array<Pokemon>} - Un tableau des Pokémon associés.
     */
    get pokemon() { return this.#pokemon }


    // --- Setters ---

    /**
     * Définit la liste des Pokémon associés à cette entité.
     * @param {Array<Pokemon>} value - Un tableau des nouveaux Pokémon.
     */
    set pokemon(value) { this.#pokemon = value }






}