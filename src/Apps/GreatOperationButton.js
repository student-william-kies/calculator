function ListOperator(props) {
    return <td><button type='button'>{props.value}</button></td>
}

function GreatOperationButton(props)
{
    const operators = props.operator;

    const list = operators.map((operator) =>
        <ListOperator key={operator.toString()} value={operator} />
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