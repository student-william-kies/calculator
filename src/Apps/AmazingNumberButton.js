// function test(props)
// {
//     console.log(props.target.value)
// }

function ListNumbers(props) {
    return <td><button type='button' id={'number-'+props.value} value={props.value}>{props.value}</button></td> /* onClick={test} */
}

function AmazingNumberButton(props)
{
    const numbersTop = props.numbersTop;
    const numbersMiddle = props.numbersMiddle;
    const numbersBottom = props.numbersBottom;

    const topNumbers = numbersTop.map((numbersTop) =>
        <ListNumbers key={numbersTop.toString()} value={numbersTop} />
    )

    const middleNumbers = numbersMiddle.map((numbersMiddle) =>
        <ListNumbers key={numbersMiddle.toString()} value={numbersMiddle} />
    )

    const bottomNumbers = numbersBottom.map((numbersBottom) =>
        <ListNumbers key={numbersBottom.toString()} value={numbersBottom} />
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