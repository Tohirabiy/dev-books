import api from '../axios'
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token')}`
}

const useComments = {
  createComments: data => api.post('/book', data),
  getComments: () => api.get('/book', { headers }),
  getCommentsItem: id => api.get(`/book/${id}`, { headers }),
  updateComments: (id, data) => api.put(`/book/${id}`, data),
  deleteComments: id => api.delete(`/book/${id}`, { headers })
}
export default useComments;
