
this.learnLinear();

async function learnLinear () {
    console.log('i ran');
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    model.compile({
        loss: 'meanSquaredError', 
        optimizer: 'sgd' 
    });

    const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
    const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

    await model.fit( xs, ys, {epochs: 250});

    document.getElementById("output").innerText = 
    model.predict(tf.tensor2d([20], [1,1]));

    let out = model.predict(tf.tensor2d([20], [1,1]));
    console.log(out);

}