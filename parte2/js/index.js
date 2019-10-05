

function executar() {

    const fill0 = tf.fill([1], 0);
    const fill1 = tf.fill([2,2], 1);
    const fill2 = tf.fill([2,2], 2);

    const zeros1 = tf.zeros([1]);
    const zeros2 = tf.zeros([2, 2]);

    const linspace = tf.linspace( 0, 9, 10 );

    const range = tf.range( 1 , 10 , 1 )

    document.getElementById("result").innerHTML = range.toString();   
}
 
