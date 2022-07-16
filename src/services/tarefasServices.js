import { Api } from "../helpers/Api"

const parseResponse = (response) => response.json()

export const TarefasService = {
    getLista: () => fetch(Api.tarefas(), {method: "GET"}).then(parseResponse), 
    getById: (id) => fetch(Api.tarefaId(id), {method: "GET"}).then(parseResponse), 
    create: (tarefa) => fetch(Api.tarefas(), {
        method:'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(tarefa),
    }).then(parseResponse),
    updateById: (id, tarefa_atualizado) => fetch(Api.tarefaId(id), {
        method:'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(tarefa_atualizado),
        }).then(parseResponse),
    deleteById: (id) => fetch(Api.tarefaId(id), {method: "DELETE"}).then(parseResponse),
}
