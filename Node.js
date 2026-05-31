const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// Charger les données JSON
const metiersData = JSON.parse(fs.readFileSync('./data/metiers.json', 'utf8'));

app.get('/risques/:metier', (req, res) => {
  const metier = req.params.metier.toLowerCase();

  if (!metiersData[metier]) {
    return res.status(404).json({ error: "Métier non trouvé" });
  }

  res.json({
    metier,
    ...metiersData[metier]
  });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
