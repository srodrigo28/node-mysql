const db = require('./db')
const grupo = require('./group')(db)

const test = async() => {
    // await grupo.create(['teste-7'])
    // await grupo.remove(7)
    // await grupo.update(13, ['teste2020'])
    const res = await grupo.findAll()
    console.log(res)
}
test()
