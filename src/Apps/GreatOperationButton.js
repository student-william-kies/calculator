function ListOperator(props) {
    return <td><button onClick={props.selectOperator} value={props.value} type='button'>{props.value}</button></td>
}

function GreatOperationButton(props)
{
    const operators = props.operators;

    const list = operators.map((operator) =>
        <ListOperator selectOperator={props.selectOperator} key={operator.toString()} value={operator} />
    )

    return (
        <table>
            <tbody>
            <tr>{list}</tr>
            </tbody>
        </table>
    );
}

export default GreatOperationButton;