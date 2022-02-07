const fs = require("fs")
const yargs = require(`yargs`)
const {addMovie, listMovies, editMovie, deleteMovie} = require(`./utils/index.js`)

const app = () => {
    if (process.argv[2] === `add`) {
        addMovie(movieArr, {title: yargs.argv.title, actor: yargs.argv.actor});
    } else if (process.argv[2] === `list`) {
        listMovies();
    } else if (process.argv[2] === `edit`) {
        editMovie();
    } else if (process.argv[2] === `delete`) {
        deleteMovie();
    } else {
        console.log(process.argv)
        console.log(`not working`)
    }};

app();