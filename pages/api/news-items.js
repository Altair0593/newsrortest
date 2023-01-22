import { getRequestSender } from '../../redux/saga/workers/helpers/request';
import rout from 'constants/apiConst';

export default async function handler(req, res) {
  try {
    const response = await getRequestSender(rout.url, { ...req.query, apiKey: rout.apiKey });
    res.status(200).json(response.data);
    return;
  } catch (error) {
    res.status(error.response?.status ?? 500).json(error);
  }
}
