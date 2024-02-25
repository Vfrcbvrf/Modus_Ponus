function validateAndUpload() {
    var tokenInput = document.getElementById('tokenInput');
    var usernameInput = document.getElementById('usernameInput');
    var repoInput = document.getElementById('repoInput');
    var branchInput = document.getElementById('branchInput');
    var fileInput = document.getElementById('fileInput');

    if (tokenInput.value.trim() === '' || usernameInput.value.trim() === '' || repoInput.value.trim() === '' || branchInput.value.trim() === '' || fileInput.files.length === 0) {
        document.getElementById('errorMessage').style.display = 'block';
    } else {
        document.getElementById('errorMessage').style.display = 'none';
        uploadFile();
    }
}

function uploadFile() {
    var tokenInput = document.getElementById('tokenInput');
    var usernameInput = document.getElementById('usernameInput');
    var repoInput = document.getElementById('repoInput');
    var branchInput = document.getElementById('branchInput');
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    var token = tokenInput.value.trim();
    var owner = usernameInput.value.trim();
    var repo = repoInput.value.trim();
    var branch = branchInput.value.trim(); // Имя ветки

    var url = "https://api.github.com/repos/" + owner + "/" + repo + "/contents/" + file.name;
    var headers = {
        "Authorization": "token " + token
    };

    var reader = new FileReader();
    reader.onload = function(event) {
        var content = event.target.result;
        var encodedContent = btoa(content);

        var data = {
            "message": "Add file via API",
            "content": encodedContent,
            "branch": branch
        };

        fetch(url, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert("Файл успешно загружен на GitHub.");
            } else {
                response.json().then(data => {
                    alert("Произошла ошибка при загрузке файла на GitHub: " + data.message);
                });
            }
        })
        .catch(error => {
            alert("Произошла ошибка при загрузке файла на GitHub: " + error.message);
        });
    };

    reader.readAsBinaryString(file);
}
