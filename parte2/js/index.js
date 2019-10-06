

function executar() {

    let saida = '';

    const tensor1d =  tf.tensor([1.5]);
    const asScalar =  tensor1d.asScalar();

    const tensor2d = tf.tensor([1,2,3,4], [2,2]);
    const flatten = tensor2d.flatten();

    const tensor1 = tf.tensor([1,2,3,4], [2,2]);
    const as1D = tensor1.as1D();

    const tensor2 = tf.tensor([1,2,3,4], [2,2,1]);
    const as2D = tensor2.as2D(2, 2);
    
    const tensor3 =tf.tensor([ 1,2,3,4], [1, 2, 2, 1] );
    const as3D = tensor3.as3D( 2,2,1 );

    saida += 'as3d antes: \n';
    saida += tensor3.toString() + '\n';
    saida += 'depois' + '\n';
    saida += as3D.toString() + '\n';
    document.getElementById("result").innerHTML = saida.toString();   

    
}
 
