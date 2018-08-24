rise.nodeAddress = 'http://45.76.143.15:5555';

function main(){
    loop_w_delay(10^10);
}

function heightl() {
    rise.blocks.getHeight(function(error, result){
        if (!error){
            height = result['height'];
            $("#p1").text("");
            $("#p1").append(`${height}`);
        } else {
            console.log(`error <br />`);
        }
    })
}

function loop_w_delay (i) {
    setTimeout(function () {
        heightl();
        get_unconfirmed_tx();
        if (--i) {          // If i > 0, keep going
            loop_w_delay(i);       // Call the loop again, and pass it the current value of i
        }
    }, 1500);
}






function get_unconfirmed_tx(){
    rise.transactions.getUnconfirmedTransactions(function(error, result){
        if (!error && result['count'] != 0) {
            console.log(result['transactions']);
            $(document).ready( function () {
                $('#table_id').DataTable();
            } );
        }
    });
}
















/*

function get_next_forger_pubkey(){
    rise.delegates.getNextForgers(1, function(error, result) {
        if (!error) {
            console.log(result["currentBlock"]["generatorPublicKey"]);
            delegate_pubkey = result["currentBlock"]["generatorPublicKey"];
            return delegate_pubkey;

            //document.getElementById("p1").innerHTML = result["height"];
        } else {
            console.log('error: ', error);
        }

    });
}

function get_next_forger(){
    pubkey=get_next_forger_pubkey()
    rise.delegates.getByPublicKey(pubkey, function(error, result) {
        if (!error) {
            console.log(result);
            //document.getElementById("p1").innerHTML = result["height"];
        } else {
            console.log('error: ', error);
        }

    });
}

function get_height(){
    rise.blocks.getHeight(function(error, result) {
        if (!error) {
            //console.log(result);
            document.getElementById("p1").innerHTML = result["height"];
            height = result["height"];
            return height;
        } else {
            console.log('error: ', error);
        }
    });
}

function get_tx(){
    rise.transactions.getList({limit: '10'}, function(error, result) {
        if (!error) {
            console.log(result);
        } else {
            console.log('error: ', error);
        }
    });
}
function get_unconf_tx(){
    rise.transactions.getUnconfirmedTransactions(function(error, result) {
        if (!error) {
            return result;
        } else {
            return error;
        }
    });
}
*/

