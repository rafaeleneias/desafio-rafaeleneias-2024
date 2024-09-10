const recintos = [
    {numero: 1, bioma: "savana", tamanhoTotal: 10, qntAnimaisExistentes: 3, animaisExistentes: ["MACACO"]},
    {numero: 2, bioma: "floresta", tamanhoTotal: 5, qntAnimaisExistentes: null, animaisExistentes: []},
    {numero: 3, bioma: ["savana", "rio"], tamanhoTotal: 7, qntAnimaisExistentes: 1, animaisExistentes: ["GAZELA"]},
    {numero: 4, bioma: "rio", tamanhoTotal: 8, qntAnimaisExistentes: null, animaisExistentes: []},
    {numero: 5, bioma: "savana", tamanhoTotal: 9, qntAnimaisExistentes: 1, animaisExistentes: ["LEAO"]}
  ];
  
  const animais = [
    {especie: "LEAO", tamanho: 3, bioma: "savana", carnivoro: true},
    {especie: "LEOPARDO", tamanho: 2, bioma: "savana", carnivoro: true},
    {especie: "CROCODILO", tamanho: 3, bioma: "rio", carnivoro: true},
    {especie: "MACACO", tamanho: 1, bioma: ["savana", "floresta"], carnivoro: false},
    {especie: "GAZELA", tamanho: 2, bioma: "savana", carnivoro: false},
    {especie: "HIPOPOTAMO", tamanho: 4, bioma: ["savana", "rio"], carnivoro: false}
  ];
  
  export { recintos, animais };
  