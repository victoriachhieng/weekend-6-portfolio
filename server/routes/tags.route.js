const express = require('require');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    // return all tags
    const queryText = `SELECT * FROM "tags" ORDER BY "name" ASC`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
            console.log(`Error making query ${queryText}`, err);
            res.sendStatus(500);
        });
});

module.exports = router;