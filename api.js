const db = require('./db')
const grupo = require('./group')(db)

const test = async() => {
    await grupo.create(['teste-2'])
}
test()
