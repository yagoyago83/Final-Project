import React, {Component} from "react";
class Blog extends Component {
constructor(props) {
    super(props);
    this.state={
        Title:'Write About Something',
        act:0,
        index:'',
        datas:[]
    }
}
componentDidMount(){
    this.refs.name.focus();
}
fSubmit =(e) => {
    e.preventDefault();
    console.log("try");
    let datas =this.state.datas;
    let name =this.refs.name.value;
    let opinion =this.refs.opinion.value;

    if (this.state.act ===0) {
    let data = {
        name, opinion
    }
    datas.push(data);
}else {
    let index = this.state.index;
    datas[index].name = name;
    datas[index].opinion = opinion;
}
    this.setState({
        datas:datas
    });
    this.refs.myForm.reset();
    this.refs.name.focus();

}
fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
        datas:datas
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
}
fEdit = (i) => {
    let data=this.state.datas[i];
    this.refs.name.value=data.name;
    this.refs.opinion.value=data.opinion;
        this.setState({
            act:1,
            index:i
        })
}


    render() {
        let datas =this.state.datas;
        return (
            <div className='Blog'>
                <h2>{this.state.title}</h2>
                <form ref="myForm" className="myForm">
                <input type="text" ref="name" placeholder="Blog name" className="formField"/>
                <input type="text" ref="opinion" placeholder="Your Opinion" className="formField"/>
                <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit</button>
                </form>
                <pre>
{datas.map((data,i)=>
<li key={i} className="myList">
{i+1}.{data.name}, {data.opinion}
<button onClick={()=>this.fRemove(i)} className="myListButton">Delete</button>
<button onClick={()=>this.fEdit(i)} className="myListButton">Edit</button>

</li>

)}
                </pre>
            </div>
        )
    }
}
export default Blog;