import { NowRequest, NowResponse } from '@vercel/node'
const Database = require('./database/db')
const saveData = require('./database/saveData')

export default async (req: NowRequest, res: NowResponse) => {
    const name = req.body.name
    const ip = req.body.ip
    try {
        const db = await Database;
        await saveData(db, {
            name: name,
            ip: ip
        })
        const dbColector = await db.all("SELECT * FROM rooms")
        console.log(dbColector)
        return res.send('Successful')
    } catch (error) {
        console.log(error)
        return res.send('Erro no banco de dados') 
    }
}