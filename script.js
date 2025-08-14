const myProducts = [
    {
        id: "PLANO001",
        secret: "CIENCIAS_ECOSISTEMAS_2025",
        title: "Plano de Aula Completo: Ecossistemas",
        driveLink: "LINK_DO_SEU_ARQUIVO_NO_GOOGLE_DRIVE_1",
        thumbnail: "https://link-para-sua-imagem.com/ecossistemas.jpg", // <-- NOVO
        
        // --- NOVOS CAMPOS PARA FILTROS E ÍCONES ---
        grade: "5º Ano",
        subject: "Ciências",
        resourceType: "Plano de Aula",
        technologies: ["Google Slides", "PDF", "Google Forms"],
        bncc: ["EF05CI04", "EF05CI05"],
        
        details: {
            "Duração Estimada": "2 aulas (50 min cada)",
            "Recursos Inclusos": "Apresentação de Slides, PDF de Atividades, Quiz Avaliativo",
            "Páginas": "12 páginas de atividades",
            "Valor": "R$ 35,00"
        }
    },
    {
        id: "ATIV002",
        secret: "MATEMATICA_FRACOES_2025",
        title: "Atividade Prática: Pizza de Frações",
        driveLink: "LINK_DO_SEU_ARQUIVO_NO_GOOGLE_DRIVE_2",
        thumbnail: "https://link-para-sua-imagem.com/fracoes.jpg", // <-- NOVO

        // --- NOVOS CAMPOS PARA FILTROS E ÍCONES ---
        grade: "4º Ano",
        subject: "Matemática",
        resourceType: "Atividade Prática",
        technologies: ["PDF", "Jamboard"],
        bncc: ["EF04MA09"],

        details: {
            "Duração Estimada": "1 aula (50 min)",
            "Recursos Inclusos": "Folha de atividade para impressão, link do template no Jamboard",
            "Páginas": "5 páginas",
            "Valor": "R$ 19,90"
        }
    }
];
