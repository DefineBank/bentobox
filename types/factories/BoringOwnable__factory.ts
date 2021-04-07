/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BoringOwnable } from "../BoringOwnable";

export class BoringOwnable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BoringOwnable> {
    return super.deploy(overrides || {}) as Promise<BoringOwnable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BoringOwnable {
    return super.attach(address) as BoringOwnable;
  }
  connect(signer: Signer): BoringOwnable__factory {
    return super.connect(signer) as BoringOwnable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringOwnable {
    return new Contract(address, _abi, signerOrProvider) as BoringOwnable;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a361031b8061005f6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063078dfbe7146100515780634e71e0c8146100895780638da5cb5b14610091578063e30c3978146100b5575b600080fd5b6100876004803603606081101561006757600080fd5b506001600160a01b038135169060208101351515906040013515156100bd565b005b610087610205565b6100996102c7565b604080516001600160a01b039092168252519081900360200190f35b6100996102d6565b6000546001600160a01b0316331461011c576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b81156101e4576001600160a01b0383161515806101365750805b61017f576040805162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b604482015290519081900360640190fd5b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b031991821617909155600180549091169055610200565b600180546001600160a01b0319166001600160a01b0385161790555b505050565b6001546001600160a01b0316338114610265576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b6000546001600160a01b031681565b6001546001600160a01b03168156fea26469706673582212207c6090a53d4b6cb98675f589aeeb0f85adca547889e4df608168c9b5da58661a64736f6c634300060c0033";
