import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/publicaciones");
  }

  get(id) {
    return http.get(`/publicaciones/${id}`);
  }

  create(data) {
    return http.post("/publicaciones", data);
  }

  update(id, data) {
    return http.put(`/publicaciones/${id}`, data);
  }

  delete(id) {
    return http.delete(`/publicaciones/${id}`);
  }

  deleteAll() {
    return http.delete(`/publicaciones`);
  }

  findByTitle(title) {
    return http.get(`/publicaciones?title=${title}`);
  }
}

export default new TutorialDataService();