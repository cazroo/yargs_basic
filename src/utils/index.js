const fs = require("fs");

const addMovie = (movieArr, movieObj) => {
    try {
        movieArr.push(movieObj);
        const stringyObj = JSON.stringify(movieArr, null, 2);
        fs.writeFileSync(`./storage.json`, stringyObj);
    } catch (error) {
        console.log(error);
    }
}

const listMovies = () => {
    try {
        let movies = fs.readFileSync(`./storage.json`, {encoding: `utf8`})
        console.log(movies)
    } catch (error) {
        console.log(`please add a movie to list`)
    }
}

const editMovie = () => {
    try {
        if (process.argv[2] === "edit") {
            movieArr = JSON.parse(fs.readFileSync("./storage.json"))
            console.log(movieArr)
            objIndex = movieArr.findIndex((obj) => obj.id == process.argv[4])
            movieArr[objIndex].title = process.argv[6];
            movieArr[objIndex].actor = process.argv[8];
            console.log("Successfully changed", movieArr[objIndex]);

            const stringyObj = JSON.stringify(movieArr);
            fs.writeFileSync("./storage.json", stringyObj);
        }
    } catch (error) {
        console.log(error);
    }

const deleteMovie = (movieArr, movieObj) => {
    movieArr.slice(movieObj);
    let i = movieArr.indexOf(movieObj)
    try {
        (i !== -1);
        movieArr.splice(i, 1);
        console.log(movieArr)

        const stringyObj = JSON.stringify(movieArr);
        fs.writeFileSync("./storage.json", stringyObj);

    } catch (error) {
        console.log(error)
    }
}}

module.exports = {
    addMovie,
    listMovies,
    editMovie,
    deleteMovie
};