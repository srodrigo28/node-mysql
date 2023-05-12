const init = connection => {
    const create = async(data) => {
        const conn = await connection
        await conn.query('insert into tb_grupo(grupo) values(?)', data)
    }
    return {
        create,
        // remove,
        // update,
        // findAll
    }
}

module.exports = init