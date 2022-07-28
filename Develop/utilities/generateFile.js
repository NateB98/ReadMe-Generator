
const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            // if an error is present, rejects the promise and send the error to .catch()
            if (err) {
                reject(err); 
                // stops function here to make sure the promise does not start the resolve() function
                return;
            }

            // if there are no errors, the resolve will activate
            resolve({
                ok: true,
                message: 'Congratulations your READMe file has been created!'
            });
        });
    });
};


module.exports = { writeFile };