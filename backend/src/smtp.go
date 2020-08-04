package main

import (
	"fmt"
	"net/http"
	"net/smtp"
	"os"
)

// Send POST /api/contact/send-message
func Send(r *http.Request) error {
	email := r.FormValue("Email")
	subject := r.FormValue("Subject")
	message := r.FormValue("Message")

	formattedMessage := "From: " + email + "\n" +
		"Subject: " + subject + "\n" +
		"Message:\n\n" + message + "\n"

	err := smtp.SendMail("smtp.gmail.com:587", smtp.PlainAuth("", os.Getenv("GMAIL_EMAIL"),
		os.Getenv("GMAIL_PASSWORD"), "smtp.gmail.com"), email, []string{os.Getenv("GMAIL_EMAIL")}, []byte(formattedMessage))
	if err != nil {
		fmt.Println(err.Error())
		return err
	}

	return nil
}
