// import React, { Component } from 'react';

// class InputTodo extends Component {
//   state = {
//     title: '',
//   };

//   onChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addTodoProps(this.state.title);
//     this.setState({
//       title: '',
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className="form-container">
//         <input
//           className="input-text"
//           type="text"
//           placeholder="Add Todo..."
//           value={this.state.title}
//           name="title"
//           onChange={this.onChange}
//         />

//         <button className="input-submit">Submit</button>
//       </form>
//     );
//   }
// }

// export default InputTodo;

//HOOKS

import React, { useState } from 'react';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoProps(title);
      setTitle('');
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
