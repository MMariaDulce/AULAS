const MaiorIdade = require('../js/Maioridade');

test('Verifica idade para dirigir', () => {
    expect(MaiorIdade(18)).toBeGreaterThan(11);
}),
test('Verifica se é menor que', () => {
    expect(20).toBeLessThan(30);
}),
test('Verifica se é maior ou igual' , () =>{
    expect(20).toBeGreaterThanOrEqual(18);
}),

test('Verificar se é menor ou igual', () =>{
    expect(50).toBeLessThanOrEqual(51);
});

test('Verificar se a palavra "SENAI" existe', () => {
    const frase = 'O senai é o melhor lugar do mundo!';
    const fraseMaiuscula = frase.toUpperCase();
    expect(fraseMaiuscula).toMatch('SENAI');
});

test('Verifica se há "Maçã" na cesta de frutas', () => {
    const frutas = ['Pera', 'Uva', 'Maçã', 'Manga', 'Laranja']
    expect(frutas).toContain('Maçã')
});