import * as Types from './types'
import axios from 'axios';

export const loadSearchedInfos = async (dispatch: any) => {
                                /********** Usar a URL da API ***********/
  const infos = await axios.get('http://localhost:5173/src/api/mock.json');

  dispatch({type: Types.REQ_SUCESS, payload: infos.data});
}