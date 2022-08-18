//pegar parâmetros pelo server-side
export async function getStaticPaths() {
    return {
        paths: [{
            params:{
                id: '1'
            }
        },{
            params:{
                id: '2'
            }
        }],
        fallback: 'blocking'
    }

    return {
        props: {
            id: id
        }
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;

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