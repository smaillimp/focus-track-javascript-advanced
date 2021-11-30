
const ClickedNames = ({names}) => (
    <div>
        <h2>Clicked Names</h2>
        <ol>
            {names.map((name) => <li key={name}>{name}</li>)}
        </ol>
    </div>
);

export default ClickedNames;