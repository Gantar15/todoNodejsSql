"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const router = Router();
const Todo = require('../models/todo');
//Получаем задачи
router.get('/', (req, res) => {
    res.json({ a: 3 });
});
//Создаем задачу
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield Todo.create({
            title: req.body.title,
            done: false
        });
        res.status(201).json({ todo });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Server error" });
    }
}));
//Изменение задачи
router.put('/:id', (req, res) => {
    try {
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
});
//Удаление задачи
router.delete('/:id', (req, res) => {
    try {
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
});
module.exports = router;
