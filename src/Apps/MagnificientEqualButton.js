function MagnificientEqualButton(props)
{
    const equal = props.equal;
    const lastNumber = props.lastNumber;

    return (
        <table>
            <tbody>
            <tr><td><button type='button' id='button-equal'>{equal}</button></td><td><button type='button'>{lastNumber}</button></td></tr>
            </tbody>
        </table>
    );
}

export default MagnificientEqualButton;