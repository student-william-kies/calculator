function MagnificientEqualButton(props)
{
    return (
        <table>
            <tbody>
            <tr><td><button onClick={props.click} type='button' id={'number-'+props.lastNumber} value={props.lastNumber}>{props.lastNumber}</button></td><td><button onClick={props.click} value={props.equal} type='button'>{props.equal}</button></td></tr>
            </tbody>
        </table>
    );
}

export default MagnificientEqualButton;