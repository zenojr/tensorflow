

function executar() {

    let saida = '';

    const tensor1 =  tf.tensor([[1, 5], [3,4]]);
    
    
    const tensor5 = tf.tensor([1, 2, 3, 4 ]);
    const reshape = tensor5.reshape([2,2])
    

    

    saida += 'antes: \n';
    saida += tensor5.toString() + '\n';
    saida += 'depois' + '\n';
    saida += reshape.toString() + '\n';
    document.getElementById("result").innerHTML = saida.toString();   

    
}
 