if(self.fetch) {
    console.log('tem suporte');
   
    (async () => {
    //   const json = await obterPost(1);
    //   const json = await incluirPost({
    //     userId: 1,
    //     title: 'meu post',
    //     body: 'meu conteudo'
    //  });
    //   const json = await atualizarPost({
    //        title: 'meu post'
    //    },1);

        const json = await deletePost(1);
        console.log(json);
    })();



} else {
    console.log('não tem suporte');
}

async function obterJsonResposta(resposta) {
    if (!resposta.ok) {
        throw new Error(
            `${resposta.status} - ${resposta.statusText}`
        );
    }
    const json = await resposta.json();
    return json;

}

async function obterPost(id) {
  const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1'+id);
  return obterJsonResposta(resposta);
}

async function incluirPost(data) {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json;charset-UTF-8'
    }
    });
    return obterJsonResposta(resposta);
}

async function atualizarPost(data, id) {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json;charset-UTF-8'
    }
    });
    return obterJsonResposta(resposta);
}

async function deletePost(id) {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
    method: 'DELETE',
    headers: {
        'Content-type':'application/json;charset-UTF-8'
    }
    });
    return obterJsonResposta(resposta);

}