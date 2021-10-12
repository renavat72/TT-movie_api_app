import './Comments.css';

const Comments = ({value, removeComment}) => {
    return(
        <div className="comment">
            <div className="commentTitle">User: {value.name}</div>
            <div className="commentText">{value.text}</div>
            <button onClick={()=>removeComment(value.name)} className="removeBtn">Remove</button>
        </div>
    )
}

export default Comments