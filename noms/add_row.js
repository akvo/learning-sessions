const noms = require('@attic/noms');
const argv = require('yargs')
      .usage('Usage: $0 --city [city] --state [state] --murders_2014 [num] --murders_2015 [num]')
      .demand(['city', 'state', 'murders_2014', 'murders_2015'])
      .argv;

const db = noms.DatabaseSpec.parse('http://localhost:8000').database();
const ds = db.getDataset('murders');

const m2014 = parseInt(argv.murders_2014);
const m2015 = parseInt(argv.murders_2015);

const record = {
    city: argv.city,
    state: argv.state,
    murders_2014: m2014,
    murders_2015: m2015,
    change: m2015 - m2014
};

ds.headValue()
    .then(list => list.append(noms.newStruct('Row', record)))
    .then(list => db.commit(ds, list))
    .then(_ => {
	console.log('Successfully added')
	console.log(record);
    });
