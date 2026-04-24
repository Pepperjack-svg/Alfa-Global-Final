export default async function handler(req, res) {
  const { symbol } = req.query;

  if (!symbol) {
    return res.status(400).json({ error: 'Symbol is required' });
  }

  const targetUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}`;

  try {
    const response = await fetch(targetUrl);
    if (!response.ok) {
      throw new Error(`Yahoo Finance responded with status: ${response.status}`);
    }
    const data = await response.json();
    
    // Set proper CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.status(200).json(data);
  } catch (error) {
    console.error('Finance API Proxy Error:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
