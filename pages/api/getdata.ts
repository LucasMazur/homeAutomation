import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url'

let cachedDb: Db = null

async function connectToDatabase (uri: string) {

    if (cachedDb) {
        return cachedDb
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    
    const dbName = url.parse(uri).pathname.substr(1)

    const db = client.db(dbName)

    cachedDb = db

    return db
}

export default async (req: NowRequest, res: NowResponse) => {
    const db = await Database;
    const data = await db.all("SELECT * FROM rooms")
    try {
        return res.json(data)
    } catch (error) {
        console.log(error)
        return res.send('Erro no banco de dados')
    }    
}

/*app.get("/", (req, res) => {
    const request = req.body
    console.log(request)
    res.send("This is Home Automation Server")
})

app.post('/removedata', async (req, res) => {
    const id = req.body.id
    try {
        const db = await Database;
        await db.run(`DELETE FROM rooms WHERE id = ${id}`)
        const dbColector = await db.all("SELECT * FROM rooms")
        console.log(dbColector)
    } catch (error) {
        console.log(error)
        return res.send('Erro no banco de dados')         
    }
})

app.listen(5500, () => {
    console.log("Running my server")
})*/