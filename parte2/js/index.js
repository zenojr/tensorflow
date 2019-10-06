

function executar() {

    let saida = '';

    const tensor1d =  tf.tensor([1.5]);
    const asScalar =  tensor1d.asScalar();

    const tensor2d = tf.tensor([1,2,3,4], [2,2]);
    const flatten = tensor2d.flatten();

    saida += 'flatten antes: \n';
    saida += tensor2d.toString() + '\n';
    saida += 'depois' + '\n';
    saida += flatten.toString() + '\n';
    document.getElementById("result").innerHTML = saida.toString();   
}
 
