package main

import (
	"errors"
	"net/http"
	"strconv"

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

// CreateUser POST /api/users
func CreateUser(r *http.Request) (User, error) {
	user := User{}
	user.UserName = r.FormValue("UserName")
	user.Email = r.FormValue("Email")
	id, err := strconv.Atoi(r.FormValue("ID"))
	if err != nil {
		return user, errors.New("406. Not Acceptable. ID must be an integer")
	}
	user.ID = id
	password := r.FormValue("Password")

	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.MaxCost)
	if err != nil {
		return user, errors.New("500. Internal Server Error, Try Again")
	}

	user.Password = string(hash)

	_, err = db.Exec("INSERT INTO users (ID, UserName, Email, Password) VALUES ($1, $2, $3, $4);", user.ID, user.UserName, user.Email, user.Password)
	if err != nil {
		return user, errors.New("500. Internal Server Error " + err.Error())
	}

	return user, nil
}

// Authenticate POST /api/users/authentication
func Authenticate(r *http.Request) (bool, error) {
	row, err := db.Query("SELECT Password FROM users WHERE UserName = $1;", r.FormValue("UserName"))
	if err != nil {
		return false, err
	}

	lookUpUser := User{}
	row.Next()
	err = row.Scan(&lookUpUser.Password)
	if err != nil {
		return false, err
	}

	passwordAttempt := r.FormValue("Password")

	err = bcrypt.CompareHashAndPassword([]byte(lookUpUser.Password), []byte(passwordAttempt))
	if err != nil {
		return false, err
	}

	return true, nil
}
