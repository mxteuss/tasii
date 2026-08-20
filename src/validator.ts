function validarChamado(titulo: string): boolean {
    if (!titulo || titulo.trim() == "") {
        throw new Error("O título do chamado não pode ser vazio.");
    }

    else if(titulo.length < 5){
        throw new Error("O título deve ter no mínimo 5 caracteres");
    }

    else if (titulo.length > 100){
        throw new Error("O titulo deve posssuir no máximo 100 caracteres");
        }


    return true;
}

export default validarChamado;
