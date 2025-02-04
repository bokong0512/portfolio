// server.js
require('dotenv').config()
const fs = require('fs')
const path = require('path')
const axios = require('axios')

const NOTION_TOKEN = process.env.NOTION_TOKEN
const DB_ID = process.env.NOTION_DB_ID
const PORT = process.env.PORT
const NOTION_VERSION = '2022-06-28' // or latest from Notion docs

// If you REALLY want to run Express locally for testing:
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

// We'll create a function that fetches data from Notion:
async function fetchNotionData() {
    const url = `https://api.notion.com/v1/databases/${DB_ID}/query`
    try {
        const response = await axios.post(
            url,
            {}, // no specific query body for now; you could add filters/sorts
            {
                headers: {
                    'Authorization': `Bearer ${NOTION_TOKEN}`,
                    'Notion-Version': NOTION_VERSION,
                    'Content-Type': 'application/json'
                }
            }
        )
        // response.data has the notion data
        return response.data.results
    } catch (err) {
        console.error('Error querying Notion:', err.response?.data || err.message)
        throw err
    }
}

// The main "build-data" routine:
async function buildDataFile() {
    try {
        const results = await fetchNotionData()
        // Write it to data.json
        const filePath = path.join(__dirname, 'src/db', 'data.json')
        fs.writeFileSync(filePath, JSON.stringify(results, null, 2))
        console.log('✅ Notion data fetched and written to src/data.json')
    } catch (error) {
        console.error('Failed to build data file:', error)
        process.exit(1)
    }
}

// If we run "node server.js" directly, let's execute buildDataFile
if (require.main === module) {
    buildDataFile()
}


app.get('/api/notion-data', async (req, res) => {
    try {
        const data = await fetchNotionData()
        res.json(data)
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch Notion data' })
    }
})

app.listen(PORT, () => {
    console.log(`Local server running on http://localhost:${PORT}`)
})
