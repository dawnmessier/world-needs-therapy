// @flow
import apiRequest from 'modules/apiRequest';
export async function fetchManagePosts(data: any): Promise<any> {
  const result = await apiRequest('/addPost', {
    method: 'GET',
  });
  return result;
}
