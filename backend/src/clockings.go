package main

import (
	"errors"
	"net/http"
	"time"
)

// Clocking Type
type Clocking struct {
	ID       string
	UserID   string
	ClockIn  time.Time
	ClockOut time.Time
}

// CreateClocking POST /api/clockings
func CreateClocking(r *http.Request) (Clocking, error) {
	clocking := Clocking{}

	clocking.UserID = r.FormValue("UserID")
	parsedTime, err := time.Parse("2006-01-02 15:04:05", r.FormValue("ClockIn"))

	if err != nil {
		return clocking, err
	}
	clocking.ClockIn = parsedTime

	_, err = db.Exec("INSERT INTO clockings (UserID, ClockIn) VALUES ($1, $2);", clocking.UserID, clocking.ClockIn)
	if err != nil {
		return clocking, errors.New("500. Internal Server Error " + err.Error())
	}

	return clocking, nil
}
