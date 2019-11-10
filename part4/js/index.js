function executar() {

    let saida = '';

    const tensor1 = tf.tensor([1, 2, 3, 4]);
    const pad = tensor1.pad([[1,2]]);

    const tensor2 = tf.tensor([1,2]);
    const tensor3 = tf.tensor([3,4]);
    // const concat = tensor2.concat(tensor3);
    const concat = tensor2.concat([ tensor2, tensor3 ]); // better

    saida += 'antes: \n';
    saida += tensor2.toString() + tensor3.toString() + '\n';
    saida += 'depois' + '\n';
    saida += concat.toString() + '\n';
    document.getElementById("result").innerHTML = saida.toString();   

    
}
 