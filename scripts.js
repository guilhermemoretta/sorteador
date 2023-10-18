function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value) //arredonda qualquer número que chegou aqui
    const max = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min; //pegou um número aleatório, fez as contas e arredondou os resultados

    alert(result)
}