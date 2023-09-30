
function MyButton(props) {

    return (
        <button onClick={props.object.event} className="btn btn-primary px-5 my-3">{props.object.value}</button>
    );
}


export {
    MyButton
}