const express = require('express')

const app = express()

var dados = [
    {
        "id": 1,
        "nome": "AUTOMÓVEIS",
        "lotes": 18
    },
    {
        "id": 14,
        "nome": "CAMINHÕES",
        "lotes": 1
    },
    {
        "id": 4,
        "nome": "CONFECÇÕES",
        "lotes": 4
    },
    {
        "id": 2,
        "nome": "IMÓVEIS",
        "lotes": 54
    },
    {
        "id": 12,
        "nome": "MOTOS E MOBILETES",
        "lotes": 4
    },
    {
        "id": 3,
        "nome": "MÁQUINAS E EQUIPAMENTOS",
        "lotes": 24
    },
    {
        "id": 5,
        "nome": "MÓVEIS / ELETRÔNICOS",
        "lotes": 58
    },
    {
        "id": 13,
        "nome": "OUTROS",
        "lotes": 8
    },
    {
        "id": 20,
        "nome": "ÔNIBUS/PASSAGEIRO",
        "lotes": 3
    }
]

app.use(express.json())

app.get("/lista", (req, res) => {
    return res.json({dados})
})

app.listen(8081, () => {
    console.log("servidor iniciado")
})