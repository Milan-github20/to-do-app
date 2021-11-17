// import React from 'react';
// import TodoItem from './TodoItem';

// class TodosList extends React.Component {
//   render() {
//     return (
//       <ul>
// {
//   this.props.todos.map((todo) => (
//     <TodoItem
//       key={todo.id}
//       /* props => */ todo={todo}
//       handleChangeProps={this.props.handleChangeProps}
//       deleteTodoProps={this.props.deleteTodoProps}
//       setUpdate={this.props.setUpdate}
//     />
//   ));
// }
//       </ul>
//     );
//   }
// }

// export default TodosList;

//HOOKS

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
