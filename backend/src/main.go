package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"},
		AllowedMethods: []string{"GET", "POST"},
	})

	r := mux.NewRouter()

	r.HandleFunc("/api/users", getUsers).Methods("GET")
	r.HandleFunc("/api/users", createUser).Methods("POST")
	r.HandleFunc("/api/users/authentication", authenticateUser).Methods("POST")
	r.HandleFunc("/api/users/if-exists-by-username/{username}", ifExistsByUsername).Methods("GET")

	r.Use(mux.CORSMethodMiddleware(r))

	log.Fatal(http.ListenAndServe(":8080", c.Handler(r)))
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

// lookUpUserByUsername : GET /api/users/if-exists-by-username/:username
func ifExistsByUsername(w http.ResponseWriter, r *http.Request) {
	username := mux.Vars(r)["username"]

	exists, err := IfExistsByUsername(username)
	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

	if exists {
		w.WriteHeader(http.StatusAccepted)
	} else {
		w.WriteHeader(http.StatusOK)
	}
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

	authenticationStatus, user, _ := Authenticate(r)

	if authenticationStatus {
		userJSON, err := json.Marshal(user)
		if err != nil {
			http.Error(w, http.StatusText(401), http.StatusUnauthorized)
			return
		}
		w.Write(userJSON)
	} else {
		http.Error(w, http.StatusText(401), http.StatusUnauthorized)
	}
}

// sendMessage : POST /api/contact/send-email
func sendMessage(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, http.StatusText(405), http.StatusMethodNotAllowed)
		return
	}

	err := Send(r)
	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

}
