const db = require("../config/database")

class User {
    constructor(data) {
        this.data = data
    }

    async registerUser() {
        const d = new Date()

        const sql = `
            INSERT INTO users(
                name,
                password,
                email,
                cellphone,
                zip,
                address,
                number,
                neighborhood,
                city,
                state,
                register_date
            ) 
            VALUES(
                '${this.data.name}',
                '${this.data.password}',
                '${this.data.email}',
                '${this.data.cellphone}',
                '${this.data.zip}',
                '${this.data.address}',
                '${this.data.number}',
                '${this.data.neighborhood}',
                '${this.data.city}',
                '${this.data.state}',
                '${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}'
            )
        `

        return await db.execute(sql)
    }
}

module.exports = User