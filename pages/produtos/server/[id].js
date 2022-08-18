//pegar parâmetros pelo server-side
export async function getServerSideProps(context) {
    const id = context.query.id;

    return {
        props: {
            id: id
        }
    }
}

function Produtos(props) {
    return <div>Id do produto: {props.id}</div>

}

export default Produtos;