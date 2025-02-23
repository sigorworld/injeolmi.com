import { KaiaRpcConnector } from "kaia-wallet-module";
import InjeolmiArtifact from "./artifacts/Injeolmi.json" with { type: "json" };

const KAIA_CHAIN_ID = 8217;
const INJEOLMI_CONTRACT_ADDRESS = "0x0268dbed3832b87582B1FA508aCF5958cbb1cd74";

class InjeolmiContract {
  public async balanceOf(user: `0x${string}`): Promise<bigint> {
    return await KaiaRpcConnector.readContract({
      chainId: KAIA_CHAIN_ID,
      address: INJEOLMI_CONTRACT_ADDRESS,
      abi: InjeolmiArtifact.abi,
      functionName: "balanceOf",
      args: [user],
    }) as bigint;
  }
}

export default new InjeolmiContract();
