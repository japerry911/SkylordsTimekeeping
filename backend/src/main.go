package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

func init() {
	if err := godotenv.Load(); err != nil {
		log.Fatalln("No .env File Found")
	}
}

func main() {
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"},
		AllowedMethods: []string{"GET", "POST", "PUT"},
	})

	r := mux.NewRouter()

	r.HandleFunc("/api/users", getUsers).Methods("GET")
	r.HandleFunc("/api/users", createUser).Methods("POST")
	r.HandleFunc("/api/users/authentication", authenticateUser).Methods("POST")
	r.HandleFunc("/api/users/if-exists-by-username/{username}", ifExistsByUsername).Methods("GET")
	r.HandleFunc("/api/contact/send-message", sendMessage).Methods("POST")
	r.HandleFunc("/api/clockings", createClocking).Methods("POST")
	r.HandleFunc("/api/clockings/find-by-userID/{userID}", checkIfClockedIn).Methods("GET")
	r.HandleFunc("/api/clockings/{ID}", clockOut).Methods("PUT")
	r.HandleFunc("/api/clockings/upload-clockings-by-csv/{userID}", processUpload).Methods("POST")
	r.HandleFunc("/api/clockings/{userID}", getUsersClockingsByRange).Queries("startDate", "{startDate}").Queries("endDate", "{endDate}").Methods("GET")

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
	if r.Method != "GET" {
		http.Error(w, http.StatusText(405), http.StatusMethodNotAllowed)
		return
	}

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

	w.WriteHeader(http.StatusOK)
}

// createClocking : POST /api/clockings
func createClocking(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, http.StatusText(405), http.StatusMethodNotAllowed)
		return
	}

	clocking, err := CreateClocking(r)
	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

	clockingJSON, err := json.Marshal(clocking)
	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

	w.Write(clockingJSON)
}

// checkIfClockedIn : GET /api/clockings/find-by-userID/:userID
func checkIfClockedIn(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		http.Error(w, http.StatusText(405), http.StatusMethodNotAllowed)
		return
	}

	userID := mux.Vars(r)["userID"]

	clocking, existing, err := CheckIfClockedIn(userID)
	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

	if !existing {
		w.WriteHeader(http.StatusOK)
	} else {
		clockingJSON, err := json.Marshal(clocking)
		if err != nil {
			http.Error(w, http.StatusText(500), http.StatusInternalServerError)
			return
		}

		w.WriteHeader(http.StatusAccepted)
		w.Write(clockingJSON)
	}
}

// clockOut : PUT /api/clockings/:ID
func clockOut(w http.ResponseWriter, r *http.Request) {
	if r.Method != "PUT" {
		http.Error(w, http.StatusText(405), http.StatusMethodNotAllowed)
		return
	}

	ID := mux.Vars(r)["ID"]
	clockOutTime := r.FormValue("ClockOutTime")

	clocking, err := ClockOut(ID, clockOutTime)
	if err != nil {
		fmt.Println(err)
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

	if clocking.ID != "" {
		clockingJSON, err := json.Marshal(clocking)
		if err != nil {
			http.Error(w, http.StatusText(500), http.StatusInternalServerError)
			return
		}

		w.WriteHeader(http.StatusOK)
		w.Write(clockingJSON)
	} else {
		w.WriteHeader(http.StatusNotFound)
	}
}

// processUpload : POST /api/clockings/upload-clockings-by-csv/:userID
func processUpload(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, http.StatusText(405), http.StatusMethodNotAllowed)
		return
	}

	userID := mux.Vars(r)["userID"]

	err := ProcessUpload(r, userID)
	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
}

// getUsersClockingsByRange : GET /api/clockings/:userID?startDate&endDate
func getUsersClockingsByRange(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		http.Error(w, http.StatusText(405), http.StatusMethodNotAllowed)
		return
	}

	userID := mux.Vars(r)["userID"]
	startDate := mux.Vars(r)["startDate"]
	endDate := mux.Vars(r)["endDate"]

	clockings, err := GetUsersClockingsByRange(startDate, endDate, userID)
	if err != nil {
		fmt.Println(err)
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

	clockingsJSON, err := json.Marshal(clockings)
	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write(clockingsJSON)
}
