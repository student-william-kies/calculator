function ListNumbers(props) {
    return <td><button type='button'>{props.value}</button></td>
}

function AmazingNumberButton(props)
{
    const numbers1 = props.numbers1;
    const numbers2 = props.numbers2;
    const numbers3 = props.numbers3;

    const list1 = numbers1.map((numbers) =>
        <ListNumbers key={numbers.toString()} value={numbers} />
    )

    const list2 = numbers2.map((numbers) =>
        <ListNumbers key={numbers.toString()} value={numbers} />
    )

    const list3 = numbers3.map((numbers) =>
        <ListNumbers key={numbers.toString()} value={numbers} />
    )

    return (
      <table>
          <tbody>
            <tr>{list1}</tr>
            <tr>{list2}</tr>
            <tr>{list3}</tr>
          </tbody>
      </table>
    );
}

export default AmazingNumberButton;