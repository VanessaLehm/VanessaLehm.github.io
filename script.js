// =======================================================
// PARTE 1: LISTA DE PRODUTOS (SEUS DADOS)
// =======================================================
const myProducts = [
    {
        id: "PROD001",
        secret: "SEGREDO_DO_PRODUTO_UM",
        title: "Título do Produto 1: Guia Essencial",
        driveLink: "LINK_DO_SEU_ARQUIVO_NO_GOOGLE_DRIVE_1",
        details: {
            "Tempo de Leitura": "45 minutos",
            "Aplicação": "Para iniciantes em marketing digital",
            "Páginas": "30 páginas",
            "Valor": "R$ 49,90"
        }
    },
    {
        id: "PROD002",
        secret: "SEGREDO_DOIS_PLANNER",
        title: "Título do Produto 2: Planner de Conteúdo",
        driveLink: "LINK_DO_SEU_ARQUIVO_NO_GOOGLE_DRIVE_2",
        details: {
            "Tempo de Leitura": "N/A (Ferramenta)",
            "Aplicação": "Organização de postagens",
            "Páginas": "15 páginas",
            "Valor": "R$ 29,90"
        }
    }
    // Para adicionar um novo produto, basta adicionar um novo bloco {} aqui
];

// Seu número de WhatsApp
const whatsappNumber = "5511999998888";


// =======================================================
// PARTE 2: LÓGICA (NÃO PRECISA MAIS MEXER AQUI)
// =======================================================

// Função que gera os cards de produto na tela
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpa a lista antes de adicionar

    myProducts.forEach(product => {
        let detailsHtml = '';
        for (const [key, value] of Object.entries(product.details)) {
            detailsHtml += `<li><strong>${key}:</strong> ${value}</li>`;
        }

        const whatsappMessage = encodeURIComponent(`Olá! Tenho interesse no '${product.title}'.`);

        const productCardHtml = `
            <div class="product-card">
                <h2>${product.title}</h2>
                <ul>${detailsHtml}</ul>
                <div class="product-buttons">
                    <a href="https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}" target="_blank" class="whatsapp-btn">Falar no WhatsApp</a>
                    <button class="download-btn" data-product-id="${product.id}">Download</button>
                </div>
            </div>
        `;
        productList.innerHTML += productCardHtml;
    });
}

// Função que gera a senha
function generatePassword(productId) {
    const product = myProducts.find(p => p.id === productId);
    if (!product) return null;

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return product.secret + day + month + year;
}

// Adiciona o evento de clique dinamicamente
document.addEventListener('click', function(event) {
    if (event.target.matches('.download-btn')) {
        const button = event.target;
        const productId = button.getAttribute('data-product-id');
        const product = myProducts.find(p => p.id === productId);

        const correctPassword = generatePassword(productId);
        if (!correctPassword) {
            alert("Erro de configuração: Produto não encontrado.");
            return;
        }

        const userPassword = prompt(`Para baixar, por favor, insira a senha do produto que eu te passei:`);

        if (userPassword === correctPassword) {
            alert("Senha correta! O download começará agora.");
            window.open(product.driveLink, '_blank');
        } else if (userPassword) {
            alert("Senha incorreta. Por favor, verifique a senha e tente novamente.");
        }
    }
});

// Inicia o processo quando a página carrega
document.addEventListener('DOMContentLoaded', renderProducts);
