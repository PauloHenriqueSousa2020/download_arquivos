const fileSystem = require('fs');
const raiz = 'C:/Projetos/Aplicações/download_arquivos/back-end/src/database/arquivos'; // passar diretorio onde se encontram os arquivos

module.exports = {
    listagem(request, response) {
        fileSystem.readdir(raiz + "/" + "Pasta" + "/", function (err, files) {
            if (err) throw err;
            return response.json({ files });
        });
    },

    download(request, response) { //nome do arquivo vai vir do files q mandou no listar
        const selectedFile = request.headers.file;

        response.setHeader('Content-disposition', 'attachment; filename=' + selectedFile);
        response.setHeader('Content-type', 'application/pdf');
        return response.download(raiz + "/" + "Pasta" + "/" + selectedFile);
    }
}