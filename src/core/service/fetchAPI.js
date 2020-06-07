import axios from 'axios';

const fetchAPI = axios.create({
  headers: {
    common: {
      Authorization:
        'Bearer ' +
        'eyJhbGciOiJIUzUxMiJ9.eyJ1aWQiOiIyYjQ3NDlkMS1kNDQ2LTQ5YjMtOTMwYi02M2MyOTMxYzRkYjEiLCJyYW5kb21fa2V5IjoiZmQxYTYyNDI0YzQ3ZjRhZjBhNWY1YjFjNThiYzJmZDYiLCJleHAiOjE1OTE1NDgxOTgsImluZm8iOnsiZW1haWwiOiJ0ZXN0LnVzZXJAaW50ZXJuYWwucmlza21ldGhvZHMubmV0IiwiZmlyc3RfbmFtZSI6IlRlc3QiLCJsYXN0X25hbWUiOiJVc2VyIiwibG9jYWxlIjoiZW4iLCJyb2xlIjpudWxsLCJjdXN0b21lcl9rZXkiOiJnc2RfdGVzdF9hc3NpZ25tZW50IiwiYXBpX3Rva2VuIjoiNjgwZGUyOTU1ZTIyMjEzNmJlOWI2NDA1MjVhYmRkOTgiLCJkZXBsb3ltZW50X2luc3RhbmNlIjp7Im5hbWUiOm51bGwsInVybCI6bnVsbH19fQ.JLnIGCUONeJXUhMlHpjTj8AZzHcw4vSy_yevl4SJpQCNqP5_EK5zVbeq18dBGk9wH8E39-iPbko-B-jo32TazA',
      'content-type': 'application/json'
    }
  }
});

export default fetchAPI;
