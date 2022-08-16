async function cnpj(request, response) {
    const api_cnpj = process.env.API_CNPJ;
    const dynamicDate = new Date();

    const dadosCnpj = await fetch(`https://receitaws.com.br/v1/cnpj/${api_cnpj}`);
    const dadosCnpjJson = await dadosCnpj.json();
    const razaoSocial = dadosCnpjJson.nome;

    response.json({
        date: dynamicDate.toGMTString(),
        razaoSocial: razaoSocial
    })
}

export default cnpj;