import { KaiaRpcConnector, KaiaWalletSessionManager } from "kaia-wallet-module";
import SInjeolmiArtifact from "./artifacts/SInjeolmi.json" with {
  type: "json",
};

const KAIA_CHAIN_ID = 8217;
const SINJEOLMI_CONTRACT_ADDRESS = "0x485Ec445AD112aCc33909bc7918f9FE282a1c330";

class SInjeolmiContract {
  public async withdrawableIJM(user: `0x${string}`): Promise<bigint> {
    return await KaiaRpcConnector.readContract({
      chainId: KAIA_CHAIN_ID,
      address: SINJEOLMI_CONTRACT_ADDRESS,
      abi: SInjeolmiArtifact.abi,
      functionName: "withdrawableIJM",
      args: [user],
    }) as bigint;
  }

  private async amountToWithdrawIJM(amount: bigint): Promise<bigint> {
    return await KaiaRpcConnector.readContract({
      chainId: KAIA_CHAIN_ID,
      address: SINJEOLMI_CONTRACT_ADDRESS,
      abi: SInjeolmiArtifact.abi,
      functionName: "amountToWithdrawIJM",
      args: [amount],
    }) as bigint;
  }

  public async unstake(amount: bigint) {
    await KaiaWalletSessionManager.writeContract({
      chainId: KAIA_CHAIN_ID,
      address: SINJEOLMI_CONTRACT_ADDRESS,
      abi: SInjeolmiArtifact.abi as any,
      functionName: "unstake",
      args: [await this.amountToWithdrawIJM(amount)],
    });
  }
}

export default new SInjeolmiContract();
