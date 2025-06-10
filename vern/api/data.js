// Sample data - in real app, this might come from a database
const sampleData = [
    { id: 1, name: 'React', type: 'Frontend Framework', popularity: 95 },
    { id: 2, name: 'Vite', type: 'Build Tool', popularity: 88 },
    { id: 3, name: 'Node.js', type: 'Runtime', popularity: 92 },
    { id: 4, name: 'Vercel', type: 'Deployment Platform', popularity: 85 }
  ]
  
  export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  
    if (req.method === 'GET') {
      const { limit, type } = req.query
      
      let filteredData = sampleData
      
      if (type) {
        filteredData = filteredData.filter(item => 
          item.type.toLowerCase().includes(type.toLowerCase())
        )
      }
      
      if (limit) {
        filteredData = filteredData.slice(0, parseInt(limit))
      }
      
      res.status(200).json({
        data: filteredData,
        total: filteredData.length,
        timestamp: new Date().toISOString()
      })
    } else {
      res.status(405).json({ error: 'Method not allowed' })
    }
  }