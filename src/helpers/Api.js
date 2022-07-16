const TarefasContext = {
    tarefasEndpoint: () => `${Api.baseUrl}/tarefas`, // 'http://localhost:8000/books'
    tarefas: () => TarefasContext.tarefasEndpoint(), // url listar todas os livros e criar
    tarefaId: (id) => `${TarefasContext.tarefasEndpoint()}/${id}`, // url recuperar um livro, editar ou deletar
}

const urls ={
    development: 'http://localhost:8000',
    production: 'https://olavo-todolistc15md04-jsonserv.herokuapp.com/'
}


export const Api = {
    
    baseUrl: urls[process.env.NODE_ENV],
    ... TarefasContext,
}