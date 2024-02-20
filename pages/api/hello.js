export default (req, res) => {
  if (req.method === 'POST') {
    const { query, body } = req;
    console.log(req.headers.host, query, body)
    res.status(200).json({ text: 'Hello' });
  } else {
    res.status(200).json({ text: 'Hello' });
  }
};
