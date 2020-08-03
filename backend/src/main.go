package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/api/users", getUsers).Methods("GET")
	r.HandleFunc("/api/users", createUser).Methods("POST")
	r.HandleFunc("/api/users/authentication", authenticateUser).Methods("POST")

	log.Fatal(http.ListenAndServe(":8080", r))
}

// getUsers : GET /api/users
func getUsers(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		http.Error(w, http.StatusText(405), http.StatusMethodNotAllowed)
		return
	}

	users, err := AllUsers()
	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

	usersJSON, err := json.Marshal(users)
	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

	w.Write(usersJSON)
}

// createUser : POST /api/users
func createUser(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, http.StatusText(405), http.StatusMethodNotAllowed)
		return
	}

	newUser, err := CreateUser(r)
	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

	newUserJSON, err := json.Marshal(newUser)
	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

	w.Write(newUserJSON)
}

// authenticateUser : POST /api/users/authentication
func authenticateUser(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, http.StatusText(405), http.StatusMethodNotAllowed)
		return
	}

	authenticationStatus, err := Authenticate(r)

	if authenticationStatus {
		w.Write([]byte("SUCCESSFULLY AUTHENTICATED"))
	} else {
		w.Write([]byte("FAILED TO AUTHENTICATE - " + err.Error()))
	}
}
