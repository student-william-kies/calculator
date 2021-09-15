function ListNumbers(props)
{
    return <td><button type='button' onClick={props.click} id={'number-'+props.value} value={props.value}>{props.value}</button></td>
}

function AmazingNumberButton(props)
{
    const numbersTop = props.numbersTop;
    const numbersMiddle = props.numbersMiddle;
    const numbersBottom = props.numbersBottom;

    const topNumbers = numbersTop.map((numbersTop) =>
        <ListNumbers click={props.click} key={numbersTop.toString()} value={numbersTop} />
    )

    const middleNumbers = numbersMiddle.map((numbersMiddle) =>
        <ListNumbers click={props.click} key={numbersMiddle.toString()} value={numbersMiddle} />
    )

    const bottomNumbers = numbersBottom.map((numbersBottom) =>
        <ListNumbers click={props.click} key={numbersBottom.toString()} value={numbersBottom} />
    )

    return (
      <table>
          <tbody>
            <tr>{topNumbers}</tr>
            <tr>{middleNumbers}</tr>
            <tr>{bottomNumbers}</tr>
          </tbody>
      </table>
    );
}

export default AmazingNumberButton;