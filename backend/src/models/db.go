package models

import (
	"database/sql"
	"fmt"
	"log"

	// PostgreSQL Library
	_ "github.com/lib/pq"
)

var db *sql.DB

func init() {
	var err error
	db, err = sql.Open("postgres", "postgres://sky:password@localhost/skylords_timekeeper?sslmode=disable")
	if err != nil {
		log.Panicln(err)
	}

	if err = db.Ping(); err != nil {
		log.Panic(err)
	}

	fmt.Println("You connected to your database.")
}
