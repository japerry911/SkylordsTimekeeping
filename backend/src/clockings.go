package main

import (
	"bufio"
	"errors"
	"fmt"
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
	parsedTime, err := time.Parse("2006-01-02T15:04:05.000Z", r.FormValue("ClockIn"))

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

// CheckIfClockedIn GET /api/clockings/search-by-userID/:userID
func CheckIfClockedIn(userID string) (Clocking, bool, error) {
	clocking := Clocking{}

	row, err := db.Query("SELECT ID, UserID, ClockIn FROM clockings WHERE UserID = $1 AND ClockOut IS NULL;", userID)
	if err != nil {
		return Clocking{}, false, err
	}

	defer row.Close()

	if !row.Next() {
		return Clocking{}, false, nil
	}

	err = row.Scan(&clocking.ID, &clocking.UserID, &clocking.ClockIn)
	if err != nil {
		return Clocking{}, false, err
	}

	return clocking, true, nil
}

// ClockOut PUT /api/clockings/:ID
func ClockOut(ID string, clockOutTime string) (Clocking, error) {
	clocking := Clocking{}

	row, err := db.Query("SELECT ID, UserID, ClockIn FROM clockings WHERE ID = $1;", ID)
	if err != nil {
		return Clocking{}, err
	}

	defer row.Close()

	if !row.Next() {
		return Clocking{}, nil
	}

	err = row.Scan(&clocking.ID, &clocking.UserID, &clocking.ClockIn)

	parsedTime, err := time.Parse("2006-01-02T15:04:05.000Z", clockOutTime)
	if err != nil {
		return Clocking{}, err
	}

	_, err = db.Exec("UPDATE clockings SET ID = $1, UserID = $2, ClockIn = $3, ClockOut = $4 WHERE ID = $1", clocking.ID, clocking.UserID, clocking.ClockIn, parsedTime)
	if err != nil {
		return Clocking{}, err
	}

	clocking.ClockOut = parsedTime

	return clocking, nil
}

// ProcessUpload POST /api/clockings/upload-clockings-by-csv
func ProcessUpload(r *http.Request) error {
	r.ParseMultipartForm(10 << 20)

	file, _, err := r.FormFile("ClockingsFile")
	if err != nil {
		return err
	}

	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		fmt.Println(scanner.Text())
	}

	if err := scanner.Err(); err != nil {
		return err
	}

	return nil
}
