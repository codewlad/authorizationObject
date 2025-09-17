export const categories = [
    {
        categoryName: "Autorização",
        menus: [
            {
                menu: "Campos",
                description: "Campos do objeto",
                address: "/field"
            },
            {
                menu: "Objetos",
                description: "Objetos de autorização",
                address: "/object"
            },
            {
                menu: "Atividade",
                description: "Cadastro de atividades",
                address: "/activity"
            },
            {
                menu: "Grupo de Autorização",
                description: "Definição das autorizações por grupo",
                address: "/auth_group"
            },
            {
                menu: "Teste 3",
                description: "Descriçào do teste 3",
                address: "/"
            },
            {
                menu: "Teste 4",
                description: "Descriçào do teste 4",
                address: "/"
            },
            {
                menu: "Teste 5",
                description: "Descriçào do teste 5",
                address: "/"
            }
        ]
    }
];

export const activities = {
    columns: [
        "Atividade",
        "Nome da Atividade"
    ],
    rows: [
        {
            actvt: "01",
            actvtName: "Criar"
        },
        {
            actvt: "02",
            actvtName: "Ler"
        },
        {
            actvt: "03",
            actvtName: "Atualizar"
        },
        {
            actvt: "04",
            actvtName: "Deletar"
        }
    ]
};