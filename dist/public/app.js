new Vue({
    el: '#app',
    data() {
      return {
        isDark: true,
        show: true,
        todoTitle: '',
        todos: []
      }
    },
    created(){
      fetch('/api/todo', {
        method: 'get'
      })
      .then(res => res.json())
      .then(todos => {
        if(todos.message){
          console.warn(todo.message);
          return;
        }

        this.todos = this.todos.concat(todos);
      })
      .catch(err => console.log(err));
    },
    methods: {
      addTodo() {
        const title = this.todoTitle.trim()
        if (!title) {
          return
        }
        fetch('/api/todo', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({title})
        })
        .then(res => res.json())
        .then(todo => {
          if(todo.message){
            console.warn(todo.message);
            return;
          }

          this.todos.push(todo.todo);
          this.todoTitle = '';
        })
        .catch(err => console.log(err));
      },
      removeTodo(id) {
        fetch(`/api/todo/${id}`, {
          method: 'delete'
        })
        .then(res => res.json())
        .then(todo => {
            if(todo.message){
              console.warn(todo.message);
              return;
            }
            
            this.todos = this.todos.filter(t => t.id !== id);
        })
        .catch(err => console.log(err));
      },
      completeTodo(id){
        fetch(`/api/todo/${id}`, {
          method: "put",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({done: true})
        })
        .then(res => res.json())
        .then(todo => {
            if(todo.message){
              console.warn(todo.message);
              return;
            }

            const indx = this.todos.findIndex(listTodo => listTodo.id === todo.id);
            this.todos[indx].updatedAt = todo.done;
        })
        .catch(err => console.log(err));
      }
    },
    filters: {
      capitalize(value) {
        return value.toString().charAt(0).toUpperCase() + value.slice(1)
      },
      date(value, withTime) {
        const options = {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        };

        if(withTime){
            options.hour = '2-digit';
            options.minute = '2-digit';
            options.second = '2-digit';
        }
        return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
      }
    }
  })