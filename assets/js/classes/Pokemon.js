import Attack from "./Attack.js"

/**
 * Représente un Pokémon avec ses caractéristiques et capacités.
 */
export default class Pokemon {
    // --- Propriétés statiques ---

    /**
     * Liste globale de tous les Pokémon créés.
     * @type {Array<Pokemon>}
     * @static
     */
    static list = [];

    // --- Propriétés privées ---

    /**
     * Nom du Pokémon.
     * @type {string}
     * @private
     */
    #name;

    /**
     * Niveau du Pokémon (si applicable, non initialisé dans ce cas).
     * @type {number}
     * @private
     */
    #level;

    /**
     * Points de vie maximum du Pokémon.
     * @type {number}
     * @private
     */
    #hpMax;

    /**
     * Points de vie actuels du Pokémon.
     * @type {number}
     * @private
     */
    #hp;

    /**
     * Endurance actuelle du Pokémon.
     * @type {number}
     * @private
     */
    #stamina;

    /**
     * Endurance maximale du Pokémon.
     * @type {number}
     * @private
     */
    #staminaMax;

    /**
     * Type élémentaire ou catégorique du Pokémon (par exemple : 'Feu', 'Eau').
     * @type {string}
     * @private
     */
    #type;

    /**
     * Liste des attaques du Pokémon.
     * @type {Array<Attack>}
     * @private
     */
    #attacks;

    // --- Constructeur ---
    
    /**
     * Crée une nouvelle instance de Pokémon avec ses caractéristiques de base.
     *
     * @param {string} name - Le nom du Pokémon.
     * @param {number} hp - Les points de vie maximum (et actuels) du Pokémon.
     * @param {number} stamina - L'endurance maximale (et actuelle) du Pokémon.
     * @param {string} type - Le type du Pokémon (par exemple : 'Feu', 'Eau').
     * @param {Array<Attack>} attacks - La liste des attaques disponibles pour ce Pokémon.
     */
    constructor(name, hp, stamina, type, attacks) {
        this.#name = name;
        this.#hpMax = hp;
        this.#hp = hp;
        this.#staminaMax = stamina;
        this.#stamina = stamina;
        this.#type = type;
        this.#attacks = attacks;
    }


    // --- Getters ---

    /**
     * Retourne le nom du Pokémon.
     * @returns {string} - Le nom du Pokémon.
     */
    get name() { return this.#name }

    /**
     * Retourne le niveau du Pokémon.
     * @returns {number} - Le niveau du Pokémon.
     */
    get level() { return this.#level }

    /**
     * Retourne les points de vie actuels du Pokémon.
     * @returns {number} - Les points de vie actuels.
     */
    get hp() { return this.#hp }

    /**
     * Retourne le maximum de points de vie du Pokémon.
     * @returns {number} - Le maximum de points de vie.
     */
    get hpMax() { return this.#hpMax }

    /**
     * Retourne l'endurance actuelle du Pokémon.
     * @returns {number} - L'endurance actuelle.
     */
    get stamina() { return this.#stamina }

    /**
     * Retourne le maximum d'endurance du Pokémon.
     * @returns {number} - Le maximum d'endurance.
     */
    get staminaMax() { return this.#staminaMax }

    /**
     * Retourne la liste des attaques du Pokémon.
     * @returns {Array<Attack>} - Un tableau des attaques disponibles.
     */
    get attacks() { return this.#attacks }

    /**
     * Retourne le type du Pokémon.
     * @returns {string} - Le type du Pokémon (exemple : 'Feu', 'Eau', 'Plante').
     */
    get type() { return this.#type }


    // --- Setters ---

    /**
     * Définit le niveau du Pokémon.
     * @param {number} value - Le nouveau niveau.
     */
    set level(value) { this.#level = value }

    /**
     * Définit les points de vie actuels du Pokémon.
     * @param {number} value - Les nouveaux points de vie actuels.
     */
    set hp(value) { this.#hp = value }


    /**
     * Définit l'endurance actuelle du Pokémon.
     * @param {number} value - La nouvelle endurance actuelle.
     */
    set stamina(value) { this.#stamina = value }




    /**
     * Crée une liste de Pokémon à partir des données fournies et les ajoute à la liste statique `Pokemon.list`.
     *
     * @param {Object} data - L'objet contenant les informations sur les Pokémon.
     * @param {Array} data.pokemon - Tableau contenant les données des Pokémon.
     * Chaque Pokémon doit inclure `name`, `hp`, `stamina`, `type` et un tableau `attacks`.
     */
    static createPokemon(data) {
        if (data && data.pokemon) {
            for (const pokemonData of data.pokemon) {
                // Crée un tableau des attaques pour le Pokémon
                this.attacks = [];
                for (let i = 0; i < 4; i++) {
                    this.attacks.push(new Attack(
                        pokemonData.attacks[i].name,
                        pokemonData.attacks[i].damage,
                        pokemonData.attacks[i].type,
                        pokemonData.attacks[i].energy
                    ));
                }
                // Crée une instance de Pokémon avec ses propriétés
                const pokemon = new Pokemon(
                    pokemonData.name,
                    pokemonData.hp,
                    pokemonData.stamina,
                    pokemonData.type,
                    this.attacks
                );

                // Ajoute le Pokémon à la liste statique
                Pokemon.list.push(pokemon);
            }
        } else {
            console.error("L'objet data ne contient pas la propriété 'pokemon'.");
        }
    }

    /**
     * Inflige des dégâts au Pokémon cible en fonction de l'attaque utilisée.
     *
     * @param {Pokemon} Pokemon - Le Pokémon cible recevant les dégâts.
     * @param {Attack} attack - L'attaque utilisée pour infliger des dégâts.
     */
    dealDamage(Pokemon, attack) {
        // Vérifie si le Pokémon attaquant a suffisamment d'énergie
        if (this.stamina > 0) {
            if (Pokemon.hp - attack.damage < 0) {
                // Le Pokémon cible n'a plus de points de vie
                Pokemon.hp = 0;
                setTimeout(() => { alert(`${Pokemon.name} est mort`); }, 310);
            } else {
                Pokemon.hp -= attack.damage;
            }
        } else {
            // Si l'attaquant n'a plus d'énergie, il subit des dégâts réduits
            if (this.hp - attack.damage < 0) {
                Pokemon.hp -= attack.damage / 2;
                this.hp = 0;
                setTimeout(() => { alert(`${this.name} est mort`); }, 310);
            } else {
                Pokemon.hp -= attack.damage / 2;
                this.hp -= attack.damage;
            }
        }
    }

    /**
     * Réduit l'endurance (`stamina`) du Pokémon attaquant en fonction du coût énergétique de l'attaque.
     *
     * @param {Attack} attack - L'attaque utilisée par le Pokémon.
     */
    reduceStamina(attack) {
        if (this.stamina - attack.energy < 0) {
            // L'endurance ne peut pas être négative
            this.stamina = 0;
        } else {
            this.stamina -= attack.energy;
        }
    }

    /**
     * Gère une attaque d'un Pokémon sur un autre, met à jour les barres de vie et d'endurance, et applique les effets des dégâts.
     *
     * @param {number} player - Identifiant du joueur attaquant (1 ou 2).
     * @param {Pokemon} target - Le Pokémon cible de l'attaque.
     * @param {number} attack - L'indice de l'attaque dans le tableau des attaques du Pokémon.
     */
    pokemonMakeAttack(player, target, attack) {
        let otherPlayer;
        if (player == 1) {
            otherPlayer = 2;
        } else {
            otherPlayer = 1;
        }

        const playerLifeBar = document.querySelector(`.player${player}-lifeBar`);
        const targetLifeBar = document.querySelector(`.player${otherPlayer}-lifeBar`);
        const playerStaminaBar = document.querySelector(`.player${player}-staminaBar`);

        // Vérifie si le Pokémon attaquant est encore en vie
        if (this.hp > 0) {
            // Applique les dégâts et réduit l'endurance
            this.dealDamage(target, this.attacks[attack]);
            this.reduceStamina(this.attacks[attack]);
        }

        // Met à jour les informations dans l'interface utilisateur
        document.getElementById(`player${otherPlayer}-pokemonHp`).innerText = `${target.hp} / ${target.hpMax}`;
        document.getElementById(`player${player}-pokemonHp`).innerText = `${this.hp} / ${this.hpMax}`;
        document.getElementById(`player${player}-stamina`).innerText = `${this.stamina} / ${this.staminaMax}`;
        targetLifeBar.style.width = `${(target.hp / target.hpMax) * 100}%`;
        playerLifeBar.style.width = `${(this.hp / this.hpMax) * 100}%`;
        playerStaminaBar.style.width = `${(this.stamina / this.staminaMax) * 100}%`;
    }
}