/**
 * Représente une instance unique qui gère les données du jeu (notamment les Pokémon).
 * Cette classe utilise le pattern Singleton pour garantir qu'il n'y ait qu'une seule instance.
 */
export default class Data {
    // --- Propriétés statiques ---

    /**
     * Instance unique de la classe Data. Utilisée pour appliquer le pattern Singleton.
     * @type {Data|null}
     * @static
     */
    static instance = null;

    /**
     * Liste des Pokémon disponibles dans le jeu.
     * @type {Array<Pokemon>}
     * @static
     */
    static pokemon = [];

    // --- Constructeur ---
    
    /**
     * Crée une nouvelle instance de Data, charge les données du jeu et gère l'accès unique à l'instance.
     * Si une instance de Data existe déjà, elle réutilise les données existantes.
     *
     * @param {Function} callBack - Une fonction de rappel à exécuter une fois les données chargées.
     */
    constructor(callBack) {
        // Si une instance existe déjà, on réutilise les données et on appelle le callback.
        if (Data.instance) {
            this.pokemon = Data.pokemon;
            callBack();
        } else {
            // Sinon, on charge les données et on crée l'instance.
            this.loadData(callBack);
            Data.instance = this;
        }
    }


    /**
     * Permet de charger les données contenue dans le fichier json
     * @param callBack 
     */
    async loadData(callBack) {
        const response = await fetch('assets/json/pokemon.json');
        const data = await response.json();
        this.pokemon = data.pokemons;
        callBack(this)
    }
}