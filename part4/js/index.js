function executar() {

    let saida = '';

    const tensor1 = tf.tensor([1, 2, 3, 4]);
    const pad = tensor1.pad([[1,2]]);

    const tensor2 = tf.tensor([1,2]);
    const tensor3 = tf.tensor([3,4]);
    // const concat = tensor2.concat(tensor3);
    const concat = tensor2.concat([ tensor2, tensor3 ]); // better

    const tensor4 = tf.tensor([5, 6]);
    const tensor5 = tf.tensor([7, 8 ]);
    const stack = tf.stack([ tensor4, tensor5 ]);

    const tensor6 = tf.tensor([1,2,3,4], [2,2]);
    const reverse = tf.reverse(tensor6);

    const tensor7 = tf.tensor([1,2,3,4,5,6,7,8], [2,4]);
    const [tensor8, tensor9] = tf.split(tensor7, 2, 1);

    saida += 'antes: \n';
    saida += tensor7.toString() + '\n';
    saida += 'depois' + '\n';
    saida += tensor8.toString() + tensor9.toString() + '\n';
    document.getElementById("result").innerHTML = saida.toString();   

    
}
 