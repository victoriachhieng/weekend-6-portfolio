const express = require ('express');
const pool = require('../modules/pool');

const router = express.Router(); 

router.get('/', (req, res) => {
// return all projects along with the tag table
    const queryText = `SELECT "projects"."id", "projects"."name_of_project", "projects"."description", "projects"."thumbnail", "projects"."website", "projects"."github", 
  "projects"."tag_id", "tags"."name" FROM "projects" 
  LEFT OUTER JOIN "tags" ON "tags"."id" = "projects"."tag_id"
  ORDER BY "projects"."id" ASC`;
  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    }).catch(error => {
      console.log(`Error making query ${queryText}`, error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
   const newProject = req.body;
   const queryText = `INSERT INTO "projects" ("name_of_project", "description", "website", "github", "date_completed", "tag_id", "thumbnail")
                     VALUES ($1, $2, $3, $4, $5, $6, $7);`;
   const queryValues = [
     newProject.name_of_project,
     newProject.description,
     newProject.website,
     newProject.github,
     newProject.date_completed,
     newProject.tag_id,
     newProject.thumbnail,
   ];
   pool.query(queryText, queryValues)
     .then(() => { 
       res.sendStatus(201); 
     }).catch(error => {
       console.log('error in post route', error);
       res.sendStatus(500);
     });
 });

 router.delete('/:id', (req, res) => {
   const reqId = req.params.id;
   console.log('route id: ', reqId);
   const query = `DELETE FROM "projects" WHERE id=$1`;
   pool.query(query, [reqId])
     .then(() => {
       res.sendStatus(200);
     }).catch(error => {
       console.log(error);
       res.sendStatus(500);
     });
});

module.exports = router;
