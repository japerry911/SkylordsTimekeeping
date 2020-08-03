package main

import (
	"errors"
	"net/http"

	"golang.org/x/crypto/bcrypt"
)

// User Type
type User struct {
	ID       int
	UserName string
	Email    string
	Password string
}

// AllUsers GET /api/users
func AllUsers() ([]User, error) {
	rows, err := db.Query("SELECT * FROM users;")
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	users := make([]User, 0)

	for rows.Next() {
		user := User{}
		err := rows.Scan(&user.ID, &user.UserName, &user.Email, &user.Password)
		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}

	return users, nil
}

// IfExistsByUsername GET /api/users/if-exists-by-username/:username
func IfExistsByUsername(username string) (bool, error) {
	result, err := db.Query("SELECT UserName FROM users WHERE username = $1", username)
	if err != nil {
		return false, err
	}

	defer result.Close()

	return result.Next(), nil
}

// CreateUser POST /api/users
func CreateUser(r *http.Request) (User, error) {
	user := User{}
	user.UserName = r.FormValue("UserName")
	user.Email = r.FormValue("Email")
	password := r.FormValue("Password")

	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return user, errors.New("500. Internal Server Error, Try Again")
	}

	user.Password = string(hash)

	_, err = db.Exec("INSERT INTO users (UserName, Email, Password) VALUES ($1, $2, $3);", user.UserName, user.Email, user.Password)
	if err != nil {
		return user, errors.New("500. Internal Server Error " + err.Error())
	}

	return user, nil
}

// Authenticate POST /api/users/authentication
func Authenticate(r *http.Request) (bool, User, error) {
	row, err := db.Query("SELECT * FROM users WHERE UserName = $1;", r.FormValue("UserName"))
	if err != nil {
		return false, User{}, err
	}

	defer row.Close()

	lookUpUser := User{}
	row.Next()
	err = row.Scan(&lookUpUser.ID, &lookUpUser.UserName, &lookUpUser.Email, &lookUpUser.Password)
	if err != nil {
		return false, User{}, err
	}

	passwordAttempt := r.FormValue("Password")

	err = bcrypt.CompareHashAndPassword([]byte(lookUpUser.Password), []byte(passwordAttempt))
	if err != nil {
		return false, User{}, err
	}

	lookUpUser.Password = ""

	return true, lookUpUser, nil
}
