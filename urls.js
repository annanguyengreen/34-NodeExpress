/*
Write a script, urls.js, that does the following:
    It is called on the command line like node urls.js FILENAME, and it reads the contents of FILENAME (each line of that file will be a URL).
    For each URL, it will get that page (a GET request to the URL) and save the HTML in a new file.
    For each URL, the output filename should be the hostname of the URL. For example, for the input URL http://yahoo.com/blah/blah, your script should write the contents to a plain text file called yahoo.com

Handle Errors
    If you cannot read the original file (FILENAME), immediately end your script with an error printed to the console.
    If you cannot download a particular URL or cannot write to a particular output file, print an error to the console saying so, but continue on with the rest of the script.
*/

const fs = require('fs');
const axios = require('axios');
const path = require('path');
const { URL } = require('url');


const filename = process.argv[2];

if (!filename) {
    console.error("Please provide a filename as an argument.");
    process.exit(1);
}

fs.readFile(filename, "utf-8", async (err, data) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    
    const urls = data.trim().split("\n");

    for (let url of urls) {
        try {
            const parsedUrl = new URL(url);
            const hostname = parsedUrl.hostname;

            const response = await axios.get(parsedUrl);
            const html = response.data

            const outputFileName = `${hostname}.txt`
            const outPath = path.join(__dirname, outputFileName);

            fs.writeFile(outPath, html, "utf-8", function(err) {
                if (err) {
                    console.error(`Error writing to ${outputFilename}:, ${err}`);
                } else {
                    console.log(`Saved ${url} to ${outputFileName}`);
                }
            })

        } catch (err) {
            console.error(`Error downloading ${url}:, ${err.message}`);
        }
    }
});