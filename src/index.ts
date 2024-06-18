import { getPluginFromMarketplaceById, getPlugins, getPluginsByGatewayId, getPluginsFromMarketplace, installPlugin, removePluginFromGateway } from "./plugins";
import { getSignatureFromCIDResponse, signCID } from "./signatures";

(async () => {
  try {
    const plugins = await getPluginsFromMarketplace()
    // await getPluginFromMarketplaceById(1)
    // await installPlugin("5f2a7f69-a1d2-4f94-8f8b-6524ed431515", 1)
    // await removePluginFromGateway("5f2a7f69-a1d2-4f94-8f8b-6524ed431515", 1)
    // const myPlugins = await getPlugins()    
    // await getPluginsByGatewayId("5f2a7f69-a1d2-4f94-8f8b-6524ed431515")

    // await signCID("QmesjiQJyy7hgQ1zXjPbZDFCbMH6u8sqgZGjRn7Dn7mnB8", new Date("12/24/2023").toISOString())
    // await getSignatureFromCIDResponse("QmesjiQJyy7hgQ1zXjPbZDFCbMH6u8sqgZGjRn7Dn7mnB8")
  } catch (error) {
    console.log(error)
    process.exit(1);
  }
})()