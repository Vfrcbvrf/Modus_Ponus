  // Открытие модального окна
  function openModal(event) {
    event.preventDefault();
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Подтверждение статуса администратора
function confirmAdmin() {
    // Здесь можно добавить дополнительную проверку
    alert("Доступ разрешен как администратор!");
    // Здесь можно перенаправить пользователя на нужную страницу
}

// Закрытие модального окна при щелчке вне его
window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}