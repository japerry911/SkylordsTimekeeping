package main

import (
	"models"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()

}

func getUsers(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		http.Error(w, http.StatusText(405), http.StatusMethodNotAllowed)
		return
	}

	users, err := models.AllUsers()
}
