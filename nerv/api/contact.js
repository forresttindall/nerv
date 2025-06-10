export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.status(200).end()
      return
    }
  
    if (req.method === 'POST') {
      try {
        const { name, email, message } = req.body
  
        // Basic validation
        if (!name || !email || !message) {
          return res.status(400).json({ 
            error: 'Missing required fields: name, email, message' 
          })
        }
  
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
          return res.status(400).json({ 
            error: 'Invalid email format' 
          })
        }
  
        // In a real app, you'd send this to your email service, database, etc.
        console.log('Contact form submission:', { name, email, message })
  
        res.status(200).json({
          success: true,
          message: 'Thank you for your message! We\'ll get back to you soon.',
          timestamp: new Date().toISOString()
        })
  
      } catch (error) {
        console.error('Contact form error:', error)
        res.status(500).json({ 
          error: 'Internal server error' 
        })
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' })
    }
  }