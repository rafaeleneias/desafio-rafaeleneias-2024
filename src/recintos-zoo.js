import { recintos, animais } from './dados.js';

class RecintosZoo {
  verificarAnimal(animal) {
    const animalEncontrado = animais.find(a => a.especie === animal);
    if (!animalEncontrado) {
      return { erro: "Animal inválido" }; // Corrigido para não ter "!" no final
    }
    return animalEncontrado;
  }

  verificarQuantidade(quantidade) {
    if (quantidade <= 0 || !Number.isInteger(quantidade)) {
      return { erro: "Quantidade inválida" }; // Corrigido para não ter "!" no final
    }
    return null;
  }

  verificarRecintosViaveis(animal, quantidade) {
    const animalInfo = this.verificarAnimal(animal);
    if (animalInfo.erro) {
      return animalInfo;
    }

    const espacoNecessario = animalInfo.tamanho * quantidade;

    const recintosViaveis = recintos.filter(recinto => {
      const biomaValido = Array.isArray(recinto.bioma)
        ? recinto.bioma.includes(animalInfo.bioma)
        : recinto.bioma === animalInfo.bioma;

      const espacoDisponivel = (recinto.tamanhoTotal - recinto.qntAnimaisExistentes * animalInfo.tamanho) >= espacoNecessario;

      const apenasMesmaEspecie = animalInfo.carnivoro
        ? recinto.animaisExistentes.every(especie => especie === animal)
        : true;

      const recintoComHipopotamo = recinto.animaisExistentes.includes("HIPOPOTAMO");
      const biomaSavanaRio = recinto.bioma.includes("savana") && recinto.bioma.includes("rio");
      const aceitaOutrasEspecies = !(animalInfo.carnivoro && !apenasMesmaEspecie) &&
        !(animal === "HIPOPOTAMO" && !biomaSavanaRio && recintoComHipopotamo);

      return biomaValido && espacoDisponivel && aceitaOutrasEspecies;
    });

    if (recintosViaveis.length === 0) {
      return { erro: "Não há recinto viável" };
    }

    return { recintosViaveis: recintosViaveis.map(recinto => {
      const espacoLivre = recinto.tamanhoTotal - (recinto.qntAnimaisExistentes * animalInfo.tamanho + espacoNecessario);
      return `Recinto ${recinto.numero} (espaço livre: ${espacoLivre} total: ${recinto.tamanhoTotal})`;
    }) };
  }

  analisaRecintos(animal, quantidade) {
    const erroQuantidade = this.verificarQuantidade(quantidade);
    if (erroQuantidade) return erroQuantidade;

    const resultadoRecintos = this.verificarRecintosViaveis(animal, quantidade);
    if (resultadoRecintos.erro) return resultadoRecintos;

    return resultadoRecintos;
  }
}

export { RecintosZoo as RecintosZoo };
