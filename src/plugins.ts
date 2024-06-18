import axios from "axios"
import dotenv from 'dotenv'
dotenv.config()

export const getPlugins = async () => {
  const res = await axios.get(`${process.env.API_URL}/ipfs/gateway_plugins`, {
    headers: {
      'Authorization': `Bearer ${process.env.PINATA_JWT}`
    }
  });
  console.log(res.data)
  return res.data;
}

export const getPluginsByGatewayId = async (gatewayId: string) => {
  const res = await axios.get(`${process.env.API_URL}/ipfs/gateway_plugins/${gatewayId}`, {
    headers: {
      'Authorization': `Bearer ${process.env.PINATA_JWT}`
    }
  });
  console.log(res.data)
  return res.data;
}

export const getPluginsFromMarketplace = async () => {
  const res = await axios.get(`${process.env.API_URL}/ipfs/plugins_marketplace`, {
    headers: {
      'Authorization': `Bearer ${process.env.PINATA_JWT}`
    }
  });
  console.log(res.data)
  return res.data;
}

export const installPlugin = async (gatewayId: string, pluginId: number) => {  
  const res = await axios.post(`${process.env.API_URL}/ipfs/gateway_plugins/${gatewayId}`, { plugin_id: pluginId }, {
    headers: {
      'Authorization': `Bearer ${process.env.PINATA_JWT}`
    }
  });
  console.log(res.data)
  return res.data;
}

export const removePluginFromGateway = async (gatewayId: string, pluginId: number) => {
  const res = await axios.delete(`${process.env.API_URL}/ipfs/gateway_plugins/${gatewayId}/plugin/${pluginId}`, {
    headers: {
      'Authorization': `Bearer ${process.env.PINATA_JWT}`
    }
  });
  console.log(res.data)
  return res.data;
}

export const getPluginFromMarketplaceById = async (pluginId: number) => {
  const res = await axios.get(`${process.env.API_URL}/ipfs/plugins_marketplace/${pluginId}`, {
    headers: {
      'Authorization': `Bearer ${process.env.PINATA_JWT}`
    }
  });
  console.log(res.data)
  return res.data;
}