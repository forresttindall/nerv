export default function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  
    if (req.method === 'GET') {
      res.status(200).json({
        message: 'VERN Stack is running! 🚀',
        status: 'online',
        timestamp: new Date().toISOString(),
        stack: ['Vite', 'Express', 'React', 'Node'],
        version: process.env.npm_package_version || '1.0.0',
        environment: process.env.NODE_ENV || 'development'
      })
    } else {
      res.status(405).json({ error: 'Method not allowed' })
    }
  }