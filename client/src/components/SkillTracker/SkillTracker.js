import './SkillTracker.scss';
import { useState, useEffect } from 'react';

function SkillTracker() {

    const [input, setInput] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [completedSkillsCount, setCompletedSkillsCount] = useState(0);

    //Set up to do list on refresh/mount
    useEffect(() => {
        let list = []
        if(localStorage.getItem('tasks')) {
            list = (JSON.parse(localStorage.getItem('tasks')));
            setTodoList(list)

            if(list.length > 1) {
                let counter = 0
                for(let i = 0; i < list.length; i++) {
                    if(list[i].complete) {
                        counter ++
                    }
                }
                setCompletedSkillsCount(counter)
            }
        }
    }, [])

    const handleClick = () => {
        const id = todoList.length + 1;
        const task = {
            id: id,
            task: input,
            complete: false
        }
        const newTodoTasks = [...todoList, task]
        setTodoList(newTodoTasks)
        localStorage.setItem('tasks', JSON.stringify(newTodoTasks))
        setInput('')
    }

    const handleComplete = (id) => {
        let list = todoList.map((task) => {
            let item = {}
            if (task.id === id) {
                if (!task.complete) {
                    setCompletedSkillsCount(completedSkillsCount + 1)
                } else {
                    setCompletedSkillsCount(completedSkillsCount - 1)
                }
                item = {...task, complete: !task.complete}
            } else  {
                item = {...task}
            };
            return item
        });
        localStorage.setItem('tasks', JSON.stringify(list))
        setTodoList(list)
    }

    const clearList = () => {
        setTodoList([])
        setCompletedSkillsCount(0)
        localStorage.removeItem('tasks')
    }

    return (
        <div className='skills'>
            <h2 className='skills__heading'>Skills Tracker</h2>
            <input className='skills__input' type='text' value={input} onInput={(e) => setInput(e.target.value)} />
            <button className='skills__submit' onClick={handleClick}>Add</button>
            <div className='skills__container'>
                <p className='skills__text'>In-progress: {todoList.length - completedSkillsCount}</p> 
                <p className='skills__text'>Completed: {completedSkillsCount}</p>
            </div>
            <ul className='skills__list'>
                {todoList.map((item) => {
                    return (
                        <li className={`skills__list-item ${item.complete ? 'complete' : ''}`}
                            key={item.id}
                            complete={item.complete ? 1 : 0}
                            id={item.id}
                            onClick={() => handleComplete(item.id)}
                        >
                            {item.task}
                        </li>
                    );
                })}
            </ul>
            <button className='skills__clear' onClick={clearList}>Clear</button>
        </div>
    );
};

export default SkillTracker;