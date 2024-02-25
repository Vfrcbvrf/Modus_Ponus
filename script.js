document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;
        const useGithub = document.getElementById('github').checked;

        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Role:', role);
        console.log('Use GitHub:', useGithub);
        
    });
});
