const init = connection => {
    const create = async(data) => {
        const conn = await connection
        await conn.query('insert into tb_grupo(grupo) values(?)', data)
    }
    const remove = async (id) => {
        const conn = await connection
        await conn.query('delete from tb_grupo where id = ? limit 1', [id])
    }
    const update = async (id, data) => {
        const conn = await connection
        await conn.query('update tb_grupo set grupo = ? where id = ?', [...data, id])
    }
    const findAll = async () => {
        const conn = await connection
        const [results] = await conn.query('select * from tb_grupo')
        return results
    }
    return {
        create,
        remove,
        update,
        findAll
    }
}

module.exports = init