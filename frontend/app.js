import { showConnect } from "@stacks/connect";
import { makeContractCall } from "@stacks/transactions";
import { StacksTestnet } from "@stacks/network";

const network = new StacksTestnet();

// TODO: replace after deploy
const CONTRACT_ADDRESS = "STXXXXXXXXXXXXXXX";
const CONTRACT_NAME = "voting";

document.getElementById("connect").onclick = () => {
  showConnect({
    appDetails: {
      name: "Stacks Voting DApp",
      icon: window.location.origin + "/logo.png",
    },
  });
};

document.getElementById("yes").onclick = async () => {
  await makeContractCall({
    contractAddress: CONTRACT_ADDRESS,
    contractName: CONTRACT_NAME,
    functionName: "vote-yes",
    functionArgs: [],
    network,
    onFinish: (data) => {
      document.getElementById("status").innerText =
        "Voted YES! TxID: " + data.txId;
    },
    onCancel: () => {
      document.getElementById("status").innerText = "Cancelled";
    },
  });
};

document.getElementById("no").onclick = async () => {
  await makeContractCall({
    contractAddress: CONTRACT_ADDRESS,
    contractName: CONTRACT_NAME,
    functionName: "vote-no",
    functionArgs: [],
    network,
    onFinish: (data) => {
      document.getElementById("status").innerText =
        "Voted NO! TxID: " + data.txId;
    },
    onCancel: () => {
      document.getElementById("status").innerText = "Cancelled";
    },
  });
};
        
