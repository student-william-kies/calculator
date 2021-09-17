import ItsOverNineThousand from "./ItsOverNineThousand";

function BeautifulScreen(props) {

    return (
        <div>
            {
                props.bool ? <ItsOverNineThousand /> : <p>{props.result}</p>
            }
        </div>
    )
}

export default BeautifulScreen;