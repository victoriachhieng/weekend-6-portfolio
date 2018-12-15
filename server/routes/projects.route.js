const express = require ('require');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
// return all projects along with the tag table
    const queryText = `SELECT "projects"."id", "projects"."name", "projects"."description", "projects"."thumbnail", "projects"."website", "projects"."github", 
  "projects"."tag_id", "tags"."name" FROM "projects" 
  LEFT OUTER JOIN "tags" ON "tags"."id" = "projects"."tag_id"
  ORDER BY "projects"."id" ASC`;
  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    }).catch(err => {
      console.log(`Error making query ${queryText}`, err);
      res.sendStatus(500);
    });
});

module.exports = router;
