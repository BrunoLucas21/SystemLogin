const db = require('../db');

export const getUsers = (req, res) => {
    const sql = "SELECT * FROM usuarios";

    db.query(sql, (err, data) => {
        if (err) throw res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const sql = "INSERT INTO usuarios(`nome`, `email`, `password`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.password,
    ];

    db.query(sql, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    });
};

export const updateUser = (req, res) => {
    const q =
        "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.");
    });
};

export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.");
    });
};