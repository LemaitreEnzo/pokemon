import Data from "./classes/Data.js"
import Game from "./classes/Game.js"
import Player from "./classes/Player.js"
import Pokemon from "./classes/Pokemon.js"




// Création des Pokemons
// const pokemon1 = new Pokemon('Evolie', 500, 500, 'normal', [new Attack('Charge', 20, 'normal', 10), new Attack('Morsure', 30, 'normal', 20), new Attack('Coup de boule', 40, 'normal', 40), new Attack('Air Ko', 50, 'normal', 60)])
// const pokemon2 = new Pokemon('Carapuce', 500, 500, 'water', [new Attack('Pistolet à O', 30, 'water', 20), new Attack('Charge', 20, 'normal', 30), new Attack('Écume', 40, 'water', 40), new Attack('Morsure', 10, 'normal', 10)])

// const game = new Game([new Player('Moi', pokemon1), new Player('Moi', pokemon2)])

const data = new Data(() => Pokemon.createPokemon(data))



setTimeout(() => {
    const player1 = new Player('Cc', data.pokemon)
    const player2 = new Player('ko', data.pokemon)

    const game = new Game([player1, player2])
    let pokemonPlayer1 = 3
    let pokemonPlayer2 = 1

    if (pokemonPlayer1 == pokemonPlayer2) {
        Pokemon.list.push(Pokemon.list[pokemonPlayer1])
        pokemonPlayer2 = Pokemon.list.length - 1
    }

    // Innitiation des infos de chaque pokemon

    game.writeInfo(0, pokemonPlayer1)
    game.writeInfo(1, pokemonPlayer2)


    // Attaques des Pokemons

    for (let j = 1; j < 3; j++) {
        const pokemon = [pokemonPlayer1, pokemonPlayer2]
        for (let i = 0; i < 4; i++) {

            document.getElementById(`player${j}-attack${i + 1}`).addEventListener('click', () => {

                Pokemon.list[pokemon[j - 1]].pokemonMakeAttack(j, Pokemon.list[pokemon[j % 2]], i)
                if (Pokemon.list[pokemon[j - 1]].hp > 0) {

                    game.playerTurn()
                }
            })
        }
    }
}, 100);



