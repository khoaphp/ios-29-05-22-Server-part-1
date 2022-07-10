const web3 = new Web3(window.ethereum);
var currentAccount = null;

$(document).ready(function(){
    check_MM();

    $("#btn_connect_MM").click(function(){
        connect_MM().then((data)=>{
            currentAccount = data[0];
            $("#account").html(currentAccount);
            //web3.eth.net.getId().then((network)=>{  }); check network
        });
    });

}); 


async function connect_MM(){
    const accounts = ethereum.request({method:"eth_requestAccounts"});
    return accounts;
}

function check_MM(){
    if(typeof window.ethereum !== "undefined"){
        $("#btn_connect_MM, #account").show();
        $("#install").hide(0);
    }else{
        $("#btn_connect_MM, #account").hide();
        $("#install").show(0);
    }
}