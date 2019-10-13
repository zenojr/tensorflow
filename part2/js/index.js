

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

    const tensor4 =tf.tensor([ 1.5,2.7,3.6,4.8] );
    const asType = tensor4.asType( 'int32' );

    saida += 'asType antes: \n';
    saida += tensor4.toString() + '\n';
    saida += 'depois' + '\n';
    saida += asType.toString() + '\n';
    document.getElementById("result").innerHTML = saida.toString();   

    
}
 
