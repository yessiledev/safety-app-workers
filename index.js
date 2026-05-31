const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.json({ message: 'API Safety App opérationnelle' });
});

// Exemple : récupérer les risques d’un métier
app.get('/risques/:metier', (req, res) => {
  const metier = req.params.metier;
  res.json({
    metier,
    risques: [
      "Chute de hauteur",
      "Manutention manuelle",
      "Produits chimiques"
    ]
  });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
