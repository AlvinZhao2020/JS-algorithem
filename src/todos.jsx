import React from 'react';


class Todos extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            todos:['study stack','study queue'],
            todo: ''
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
   handleAdd(){
       let t = Array.from(this.state.todos);
       t.push(this.state.todo)
       this.setState({todos:t})
       this.setState({todo:''})
   }
   handleDelete(){
       let t = Array.from(this.state.todos);
       t.shift()
       this.setState({ todos: t })
   }

    update() {
        return e => this.setState({
            todo: e.target.value
        });
    }

    render(){
        return  (
                <div>      
                    <label>
                        new job to do
                        <input type = 'text' 
                         value = {this.state.todo} 
                         onChange={this.update()}/>
                        <button onClick={this.handleAdd}>add to list</button>
                    </label>
                    <ul>
                    {
                        this.state.todos.map((e,i)=>
                    <li key ={i} >task {i+1}: {e}</li>
                        )
                    }
                    </ul>
                    <button onClick={this.handleDelete}>first task done</button>
                </div>
            )
    }
   
}


export default Todos