const noms = require('@attic/noms');

const db = noms.DatabaseSpec.parse('http://localhost:8000').database();
const ds = db.getDataset('murders');

ds.headValue().then(list => console.log(list.type.describe()));
