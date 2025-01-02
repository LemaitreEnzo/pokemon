/**
 * Représente une attaque utilisable par un Pokémon.
 */
export default class Attack {
    // --- Propriétés privées ---

    /**
     * Nom de l'attaque.
     * @type {string}
     * @private
     */
    #name;

    /**
     * Dégâts infligés par l'attaque.
     * @type {number}
     * @private
     */
    #damage;

    /**
     * Type élémentaire ou catégorique de l'attaque (par exemple : 'Feu', 'Eau').
     * @type {string}
     * @private
     */
    #type;

    /**
     * Quantité d'énergie requise pour utiliser cette attaque.
     * @type {number}
     * @private
     */
    #energy;

    // --- Constructeur ---

    /**
     * Crée une nouvelle instance d'attaque avec ses caractéristiques de base.
     *
     * @param {string} name - Le nom de l'attaque.
     * @param {number} damage - Les dégâts infligés par l'attaque.
     * @param {string} type - Le type de l'attaque (par exemple : 'Feu', 'Eau').
     * @param {number} energy - L'énergie nécessaire pour effectuer cette attaque.
     */
    constructor(name, damage, type, energy) {
        this.#name = name;
        this.#damage = damage;
        this.#type = type;
        this.#energy = energy;
    }



    // --- Getters ---

    /**
     * Retourne le nom de l'attaque.
     * @returns {string} - Le nom de l'attaque.
     */
    get name() { return this.#name }

    /**
     * Retourne les dégâts infligés par l'attaque.
     * @returns {number} - La valeur des dégâts.
     */
    get damage() { return this.#damage }

    /**
     * Retourne le type de l'attaque (par exemple, 'Feu', 'Eau', 'Plante').
     * @returns {string} - Le type de l'attaque.
     */
    get type() { return this.#type }

    /**
     * Retourne le coût en énergie nécessaire pour utiliser cette attaque.
     * @returns {number} - La quantité d'énergie requise.
     */
    get energy() { return this.#energy }






}