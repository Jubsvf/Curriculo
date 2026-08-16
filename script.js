// Seleciona o botão de Dark Mode e o corpo da página (body)
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const icon = darkModeToggle.querySelector('i');

// Verifica se o usuário já havia escolhido o modo escuro anteriormente (Local Storage)
const currentTheme = localStorage.getItem('theme');

// Aplica o tema salvo (se existir)
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun'); // Troca o ícone para o sol
}

// Evento de clique no botão
darkModeToggle.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no body
    body.classList.toggle('dark-mode');

    // Verifica se o modo escuro está ativado no momento
    const isDarkMode = body.classList.contains('dark-mode');

    // Atualiza o ícone do botão
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark'); // Salva a preferência
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light'); // Salva a preferência
    }
});
