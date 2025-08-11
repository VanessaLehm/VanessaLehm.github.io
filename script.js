// Objeto com as "palavras secretas" para cada produto.
// VOCÊ DEVE MUDAR ESTES VALORES PARA ALGO QUE SÓ VOCÊ SAIBA.
const productSecrets = {
    "PROD001": "SEGREDO_DO_PRODUTO_UM", // Segredo para o Guia Essencial
    "PROD002": "SEGREDO_DOIS_PLANNER"   // Segredo para o Planner de Conteúdo
    // Adicione mais segredos aqui conforme adiciona produtos
};

// Função que gera a senha diária
function generatePassword(productId) {
    const secret = productSecrets[productId];
    if (!secret) {
        return null; // Produto não encontrado
    }
    const today = new Date();
    // Formata a data como DDMMYYYY
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = today.getFullYear();
    
    // A senha será a junção do segredo com a data. Ex: SEGREDO_DO_PRODUTO_UM25122025
    const password = secret + day + month + year;
    return password;
}

// Adiciona o evento de clique a todos os botões de download
document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const driveLink = button.getAttribute('data-drive-link');
        
        const correctPassword = generatePassword(productId);

        if (!correctPassword) {
            alert("Erro de configuração: Produto não encontrado.");
            return;
        }

        const userPassword = prompt(`Para baixar, por favor, insira a senha do produto que eu te passei:`);

        if (userPassword === correctPassword) {
            alert("Senha correta! O download começará agora.");
            window.open(driveLink, '_blank'); // Abre o link do Google Drive
        } else if (userPassword) { // Se o usuário digitou algo e errou
            alert("Senha incorreta. Por favor, verifique a senha e tente novamente.");
        }
        // Se o usuário clicou em "Cancelar" (userPassword é null), não faz nada.
    });
});
