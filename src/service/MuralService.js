import http from "../http-common";

class MuralService {
  getAll() {
    return http.get("/questions");
  }

  get(id) {
    return http.get(`/questions/${id}`);
  }

  create(data) {
    return http.post("/questions", data);
  }

  update(id, data) {
    return http.put(`/questions/${id}`, data);
  }

  delete(id) {
    return http.delete(`/questions/${id}`);
  }

  deleteAll() {
    return http.delete(`/questions`);
  }

  findByTitle(title) {
    return http.get(`/questions?title=${title}`);
  }
}

export default new MuralService();
