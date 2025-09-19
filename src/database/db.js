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
                menu: "Objeto x Campo",
                description: "Definição de campos por objeto",
                address: "/object_field"
            },
            {
                menu: "Grupo de Autorização",
                description: "Definição das autorizações por grupo",
                address: "/auth_group"
            }
        ]
    },
    {
        categoryName: "Projeto",
        menus: [
            {
                menu: "Projeto",
                description: "Criação de projetos",
                address: "/project"
            }
        ]
    },
    {
        categoryName: "Gestão de Acesso",
        menus: [
            {
                menu: "Grupo de acesso",
                description: "Cadastro de grupo de acesso",
                address: "/group"
            }
        ]
    }
];

export const activities = {
    columns: ["actvt", "actvtName"],
    rows: [
        { actvt: "01", actvtName: "Criar" },
        { actvt: "02", actvtName: "Ler" },
        { actvt: "03", actvtName: "Atualizar" },
        { actvt: "04", actvtName: "Deletar" }
    ]
};

export const fields = {
    columns: ["field", "fieldName", "ref_tab", "ref_column"],
    rows: [
        { field: "PLANT", fieldName: "Planta", ref_tab: "", ref_column: "" },
        { field: "ACTVT", fieldName: "Atividade", ref_tab: "activities", ref_column: "actvt" }
    ]
};

export const objects = {
    columns: ["object", "objectName"],
    rows: [
        { object: "PROJECT", objectName: "Projeto" }
    ]
};

export const objectField = {
    columns: ["object", "field"],
    rows: []
};

export const groups = {
    columns: ["group", "groupName"],
    rows: [
        { group: "1", groupName: "Administrador" },
        { group: "2", groupName: "Gerente de Projeto" }
    ]
};

export const projects = {
    columns: ["project", "projectName", "manager"],
    rows: [
        { project: "1", projectName: "Projeto Nexus", manager: "1" },
        { project: "2", projectName: "Projeto Sigma", manager: "2" }
    ]
};

export const authGroup = {
    columns: ["auth", "group", "object", "field", "value"],
    rows: [
        { auth: "1", group: "1", object: "PROJECT", field: "PLANT", value: "3JBR" },
        { auth: "2", group: "1", object: "PROJECT", field: "ACTVT", value: "01" },
        { auth: "3", group: "1", object: "PROJECT", field: "ACTVT", value: "02" },
        { auth: "4", group: "1", object: "PROJECT", field: "ACTVT", value: "03" },
        { auth: "5", group: "1", object: "PROJECT", field: "ACTVT", value: "04" },
        { auth: "6", group: "2", object: "PROJECT", field: "PLANT", value: "3JBR" },
        { auth: "7", group: "2", object: "PROJECT", field: "ACTVT", value: "02" },
        { auth: "8", group: "2", object: "PROJECT", field: "MANAGER", value: "" },
        { auth: "9", group: "2", object: "PROJECT", field: "PROJECT", value: "1" },
    ]
};