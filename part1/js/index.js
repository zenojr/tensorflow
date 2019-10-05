

function executar() {

    let saida = '';

    const tensor1d =  tf.tensor([1.5]);
    const asScalar =  tensor1d.asScalar();

    saida += 'asScalar antes: \n';
    saida += tensor1d.toString() + '\n';
    saida += 'depois' + '\n';
    saida += asScalar.toString() + '\n';
    document.getElementById("result").innerHTML = saida.toString();   
}
 
