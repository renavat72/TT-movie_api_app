import { useState } from "react"
import Comments from "./Comments";
import './Card.css'

const Card = ({info}) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState({name:'', text:""});
    const onSubmit = (event) => {
        event.preventDefault();
        setComments([...comments, comment]);
    }
    const onChange = (event) => {
        setComment({...comment, [event.target.name]: event.target.value});
    }
    const removeComment = (name) => {
        setComments(comments.filter(x=> x.name !== name));
    }   
    console.log(info)
    return (
        <div className="card">
            <img src={info.large_cover_image} alt="Img" className="cardImg"/>
            <div className="cardInfo">
                <div className="cardTitle">{info.title_long}</div>
                <div className="cardGenr">{info.genres[0]}</div>
                <div className="cardSinops">{info.synopsis}</div>
            </div>
            <div className="cardCommentsBlock">
                <div className="comments">
                    {comments <= 0 ? 
                    <div className="emptyComments">No comments</div>    
                    :
                    <div>{comments.map(c => <Comments key={c.text} value={c} removeComment={removeComment}/>)}</div>
                }
                </div>
                <div className="inputsBlock">
                    <form onSubmit={onSubmit}>
                        <input type="input" placeholder="Name" name="name" className="inputsComment" required value={comment.name} onChange={onChange}/>
                        <input type="input" placeholder="Text" name="text" className="inputsComment" required value={comment.value} onChange={onChange}/>
                        <input type="submit" className="submitBtn"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Card