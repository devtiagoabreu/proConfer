//pegar parâmetros pelo server-side
export async function getServerSideProps(context) {
    const code = context.query.code;

    return {
        props: {
            code: code
        }
    }
}

function Produtos(props) {
    return <div>Code do produto: {props.code}</div>

}

export default Produtos;