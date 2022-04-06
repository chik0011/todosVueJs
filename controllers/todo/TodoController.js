const Todo = require('../../models/Todo');
const genericCtrl = require("../../helpers/ctrlHelper.js")

exports.list = async (req, res) => {
    Todo.find()
    .then((todos) => {
        res.status(200).json(todos)
    })
    .catch(error => res.status(400).json({error}))
}

exports.getOneItem = async (req, res) => {
    Todo.findOne({ _id: req.params.id })
    .then((todos) => {
        res.status(200).json(todos)
    })
    .catch(error => res.status(400).json({error}))
}

exports.postItem = async (req, res) => {
    Todo.create({
            description: req.body.description,
            done: req.body.done
        })
        .then((todos) => {
            res.status(200).json(todos)
        })
        .catch(error => res.status(400).json({error}))
}

exports.patchItem = async (req, res) => {
    const filter = { _id: req.body.id };
    Todo.findOneAndUpdate(filter, {
        done: req.body.done
    })
    .then((todos) => {
        res.status(200)
    })
    .catch(error => res.status(400).json({error}))
}

exports.updateItem = async (req, res) => {
    Todo.updateOne({
        description: req.body.description,
        done: req.body.done
    })
    .then((todos) => {
        res.status(200)
    })
    .catch(error => res.status(400).json({error}))
}

exports.deleteItem = async (req, res) => {
    //const todos = todo

    const filter = { _id: req.body.id };

    Todo.findOneAndDelete(filter)
    .then((todos) => {
        res.status(200).json(todos)
    })
    .catch(error => res.status(400).json({error}))
}