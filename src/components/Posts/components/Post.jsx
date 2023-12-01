function Post({ title, body, ...props }) {
    return (
        <li>
            <span>{title}</span>
            <br />
            <p>{body}</p>
        </li>
    );
}

export default Post;