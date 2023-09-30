
function H1WithMarginY5(props) {
    return (
        <h1 className="mb-4 font-extrabold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl">{props.value}</h1>
    );
}

function PtagComponent(props) {
    return (
        <p className="text-indigo-600">{props.value}</p>
    );
}

export {
    H1WithMarginY5,
    PtagComponent
}