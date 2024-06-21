"use strict";

const getBanks = async (req, res) => {
  let limit = req.query.limit || 10;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    const result = await response.json();
    console.log(result);
    res.send({ result: 200, data: result });
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
};

const getBanksId = async (req, res) => {
  let limit = req.query.limit || 10;
  const id = req.params.id;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}?_limit=${limit}`
    );
    const result = await response.json();
    console.log(result);
    res.send({ result: 200, data: result });
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
};

module.exports = { getBanks, getBanksId };
