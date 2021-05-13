
export{};
const {Router} = require('express');
const router = Router();
const Todo = require('../models/todo');

//Получаем задачи
router.get('/', (req: any, res: any) => {
    res.json({a: 3});
});

//Создаем задачу
router.post('/', async (req: any, res: any) => {
    try {
        const todo = await Todo.create({
            title: req.body.title,
            done: false
        });
        res.status(201).json({todo});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "Server error"});
    }
});

//Изменение задачи
router.put('/:id', (req: any, res: any) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
});

//Удаление задачи
router.delete('/:id', (req: any, res: any) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
});

module.exports = router;