const BotaoDeleta = () =>{
    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add()
    botaoDeleta.innerText = 'deletar';
    botaoDeleta.addEventListener('click', deletarTarefa);
    return botaoDeleta;
}
const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;
    const tarefaDeletada = botaoDeleta.parentElement;

    tarefaDeletada.remove();
}

export default BotaoDeleta;