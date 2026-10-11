import http from "k6/http";

const BASE_URL = "http://18.183.92.8";

export default function() {
  http.get(`${BASE_URL}/`)
}

