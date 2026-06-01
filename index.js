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
app.get('/metiers', (req, res) => {
  res.json(Object.keys(metiersData));
  app.post('/danger', (req, res) => {
  const { description, date } = req.body;

  if (!description) {
    return res.status(400).json({ error: "Description manquante" });
  }

  const signalement = {
    description,
    date: date || new Date().toISOString()
  };

  // Charger les signalements existants
  let data = [];
  try {
    data = JSON.parse(fs.readFileSync('./data/dangers.json', 'utf8'));
  } catch (e) {}

  // Ajouter le nouveau signalement
  data.push(signalement);

  // Sauvegarder
  fs.writeFileSync('./data/dangers.json', JSON.stringify(data, null, 2));

  res.json({ message: "Danger enregistré", signalement });
});

});
