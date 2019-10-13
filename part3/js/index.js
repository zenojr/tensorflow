

function executar() {

    let saida = '';

    const tensor1 =  tf.tensor([[1, 5], [3,4]]);
    
    tensor1.toString() + '\n';
    
    tensor1.dispose(); + '\n';
    

    
    
    
    saida += 'antes: \n';
    const tensor2 = tf.tensor( [true, false, true, false] );
    
    saida += tensor2.toString() + '\n';
    saida += 'depois' + '\n';
    const toFloat = tensor2;  
    saida += toFloat.toString();
    document.getElementById("result").innerHTML = saida.toString();   

    
}
 