// import React from 'react';
// import styles from '../TodoItem.module.css';

// class TodoItem extends React.Component {
//   state = {
//     editing: false,
//   };

//   handleEditing = () => {
//     this.setState({
//       editing: true,
//     });
//   };

// handleUpdatedDone = (event) => {
//   if (event.key === 'Enter') {
//     this.setState({ editing: false });
//   }
// };

//   componentWillUnmount() {
//     console.log('Cleaning up...');
//   }

// render() {
//   const completedStyle = {
//     fontStyle: 'italic',
//     color: '#595959',
//     opacity: 0.4,
//     textDecoration: 'line-through',
//   };

// let viewMode = {};
// let editMode = {};

// if (this.state.editing) {
//   viewMode.display = 'none';
// } else {
//   editMode.display = 'none';
// }

//     return (
//       <li className={styles.item}>
//         <div onDoubleClick={this.handleEditing} style={viewMode}>
//           <input
//             className={styles.checkbox}
//             type="checkbox"
//             checked={this.props.todo.completed}
//             onChange={() => this.props.handleChangeProps(this.props.todo.id)}
//           />

//           <button
//             onClick={() => this.props.deleteTodoProps(this.props.todo.id)}
//           >
//             Delete
//           </button>

//           <span style={this.props.todo.completed ? completedStyle : null}>
//             {this.props.todo.title}
//           </span>
//         </div>

//         <input
//           type="text"
//           style={editMode}
//           value={this.props.todo.title}
//           className={styles.textInput}
//           onChange={(e) => {
//             this.props.setUpdate(e.target.value, this.props.todo.id);
//           }}
//           onKeyDown={this.handleUpdatedDone}
//         />
//       </li>
//     );
//   }
// }

// export default TodoItem;

//HOOKS

import React, { useState } from 'react';
import styles from '../TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title } = props.todo;

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />

        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>

        <span style={completed ? completedStyle : null}>{title}</span>
      </div>

      <input
        type="text"
        style={editMode}
        value={title}
        className={styles.textInput}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
