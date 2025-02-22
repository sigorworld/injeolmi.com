import { KaiaRpcConnector } from "kaia-wallet-module";
import SInjeolmiArtifact from "./artifacts/SInjeolmi.json" with {
  type: "json",
};

const KAIA_CHAIN_ID = 8217;
const SINJEOLMI_CONTRACT_ADDRESS = "0x485Ec445AD112aCc33909bc7918f9FE282a1c330";

class SInjeolmiContract {
  public async withdrawableIJM(user: string): Promise<bigint> {
    return await KaiaRpcConnector.readContract({
      chainId: KAIA_CHAIN_ID,
      address: SINJEOLMI_CONTRACT_ADDRESS,
      abi: SInjeolmiArtifact.abi,
      functionName: "withdrawableIJM",
      args: [user],
    }) as bigint;
  }
}

export default new SInjeolmiContract();
