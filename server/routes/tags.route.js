const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    // return all tags
    const queryText = `SELECT * FROM "tags" ORDER BY "name" ASC`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log(`Error making query ${queryText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;