function MagnificientEqualButton(props)
{
    return (
        <table>
            <tbody>
            <tr><td><button type='button' id='button-equal'>{props.equal}</button></td><td><button onClick={props.click} type='button' id={'number-'+props.lastNumber} value={props.lastNumber}>{props.lastNumber}</button></td></tr>
            </tbody>
        </table>
    );
}

export default MagnificientEqualButton;