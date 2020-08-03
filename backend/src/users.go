package main

import "fmt"

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
		fmt.Println(err)
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
