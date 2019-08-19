import axios from 'axios'

export function add(a, b) {
  return a + b
}

export function minus(a, b) {
  return a - b
}

export function multi(a, b) {
  return a * b
}

export function getData() {
  return axios.post('http://ai.ok-bug.com/api/city')
}