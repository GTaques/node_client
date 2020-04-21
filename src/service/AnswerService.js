import http from "../http-common";

class AnswerService {
  getAll() {
    return http.get("/answers");
  }

  get(id) {
    return http.get(`/answers/${id}`);
  }

  create(data) {
    return http.post("/answers", data);
  }

  update(id, data) {
    return http.put(`/answers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/answers/${id}`);
  }

  deleteAll() {
    return http.delete(`/answers`);
  }

  findByTitle(title) {
    return http.get(`/answers?title=${title}`);
  }
}

export default new AnswerService();
