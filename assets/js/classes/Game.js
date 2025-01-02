/**
 * Représente une partie de jeu.
 */
export default class Game {
    // --- Propriétés privées ---

    /**
     * Liste des joueurs participant au jeu.
     * @type {Array<Object>}
     * @private
     */
    #player;

    /**
     * Numéro du tour actuel. Initialisé à 1.
     * @type {number}
     * @private
     */
    #turn = 1;

    // --- Constructeur ---
    
    /**
     * Crée une nouvelle instance du jeu avec une liste de joueurs.
     *
     * @param {Array<Object>} player - Liste des joueurs participant au jeu.
     */
    constructor(player) {
        this.#player = player;
    }



    // --- Getters ---

    /**
     * Retourne la liste des joueurs dans le jeu.
     * @returns {Array<Object>} - Un tableau contenant les informations des joueurs.
     */
    get player() { return this.#player }

    /**
     * Retourne le numéro du tour actuel.
     * @returns {number} - Le numéro du tour en cours.
     */
    get turn() { return this.#turn }


    // --- Setters ---

    /**
     * Définit la liste des joueurs dans le jeu.
     * @param {Array<Object>} value - Un tableau contenant les informations des joueurs.
     */
    set player(value) { this.#player = value }

    /**
     * Définit le numéro du tour actuel.
     * @param {number} value - Le numéro du tour à définir.
     */
    set turn(value) { this.#turn = value }


    static start(){
        console.log('Le jeu a démaré');
        
    }

    /**
     * Gère le changement de tour entre les joueurs.
     * Alterne les classes CSS des conteneurs d'attaques des joueurs pour indiquer à qui c'est le tour.
     * Incrémente également le compteur de tour (`this.turn`).
     */
    playerTurn() {
        if (this.turn % 2 == 0) {
            // Retire la classe 'turn' du conteneur d'attaques du joueur de droite
            document.querySelector('.right .atcksContainer').classList.remove('turn');
            // Ajoute la classe 'turn' au conteneur d'attaques du joueur de gauche
            document.querySelector('.left .atcksContainer').classList.add('turn');
            // Incrémente le compteur de tour
            this.turn += 1;
        } else {
            // Retire la classe 'turn' du conteneur d'attaques du joueur de gauche
            document.querySelector('.left .atcksContainer').classList.remove('turn');
            // Ajoute la classe 'turn' au conteneur d'attaques du joueur de droite
            document.querySelector('.right .atcksContainer').classList.add('turn');
            // Incrémente le compteur de tour
            this.turn += 1;
        }
    }

    /**
     * Met à jour l'interface utilisateur avec les informations d'un Pokémon.
     *
     * @param {number} idPlayer - L'identifiant du joueur (0 pour le joueur 1, 1 pour le joueur 2).
     * @param {number} idPokemon - L'identifiant du Pokémon du joueur sélectionné.
     */
    writeInfo(idPlayer, idPokemon) {
        // Récupère les attaques du Pokémon sélectionné
        const attacks = this.player[idPlayer].pokemon[idPokemon].attacks;

        // Met à jour les informations de santé, de nom et d'endurance du Pokémon dans l'interface
        document.getElementById(`player${idPlayer + 1}-pokemonHp`).innerText = this.player[idPlayer].pokemon[idPokemon].hp + '/' + this.player[idPlayer].pokemon[idPokemon].hpMax;
        document.getElementById(`player${idPlayer + 1}-pokemonName`).innerText = this.player[idPlayer].pokemon[idPokemon].name;
        document.getElementById(`player${idPlayer + 1}-stamina`).innerText = this.player[idPlayer].pokemon[idPokemon].stamina + '/' + this.player[idPlayer].pokemon[idPokemon].staminaMax;

        // Crée et configure une nouvelle image pour représenter le Pokémon
        const newImage = document.createElement('img');
        newImage.src = `assets/img/${this.player[idPlayer].pokemon[idPokemon].img}`;
        newImage.alt = `${this.player[idPlayer].pokemon[idPokemon].name}`;
        newImage.classList.add('pokemon', `player${idPlayer + 1}-pokemon`);

        // Ajoute l'image dans le conteneur correspondant
        const parentElement = document.getElementById(`pokemon${idPlayer + 1}`);
        parentElement.appendChild(newImage);

        // Ajoute les noms et types des attaques du Pokémon dans l'interface
        let i = 0;
        attacks.forEach(element => {
            document.getElementById(`player${idPlayer + 1}-attack${i + 1}`).innerText = element.name;
            document.getElementById(`player${idPlayer + 1}-attack${i + 1}`).classList.add(element.type);
            i++;
        });
    }


}