export default function GET(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS'); // Allow specific methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers

    if (req.method === 'OPTIONS') {
        res.status(204).end(); // Handle preflight requests
        return;
    }

    res.status(200).json({ message: 'hello' });
}
