const db = require("../database-mysql");

const selectAll = function (req, res) {
  db.query("SELECT * FROM owners", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
const selectSokken = function (req, res) {
  const het="SELECT * FROM sokken WHERE balas_idbalas= ?"
  db.query(het,[req.params.balasid], (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  },req.params.balasid);
};

const addone = function (req, res, body) {
  const sql = 'INSERT INTO sokken SET ?'
  const add = "INSERT INTO sokken (name,image,balas_idbalas) VALUES(?,?,?)  ";
  // db.query(add, [[req.body.name],[req.body.image],[req.params.balasid]], (err, items, fields) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   } else {
  //     res.status(200).send(items);
  //   }
  // });
  db.query(sql, {...req.body, ...req.params}, (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
const fasakhSokken = function (req, res, params) {
  const del = "DELETE FROM sokken WHERE idsokken=? AND balas_idbalas= ?";
  db.query(
    del,
    [[req.params.iditem],
    [req.params.balasid]],
    (err, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send("deleted");
        console.log(params.iditem);
      }
    }
  );
};


const getOne = function (req, res) {
  const getone = "SELECT * FROM owners WHERE name= ? AND password= ? ";
  db.query(getone, [[req.params.name], [req.params.password]], (err, items) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(items);
  });
};

const update = function (req, res) {
  const up = "UPDATE owners SET fortune=fortune+300  WHERE idowners=?";
  db.query(
    up,
     [req.params.idowners],
    (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    }
  );
};

module.exports = {getOne, selectSokken,selectAll, addone, fasakhSokken, update };
