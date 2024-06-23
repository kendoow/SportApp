package utils

//
//import (
//	"fmt"
//	"log"
//	"os"
//
//	openapi "github.com/twilio/twilio-go/rest/api/v2010"
//)
//
//func SendOTP(to string, otp string) error {
//	accountSid := os.Getenv("TWILIO_ACCOUNT_SID")
//	authToken := os.Getenv("TWILIO_AUTH_TOKEN")
//
//	client := twilio.NewRestClientWithParams(twilio.ClientParams{
//		Username: accountSid,
//		Password: authToken,
//	})
//
//	params := &openapi.CreateMessageParams{}
//
//	params.SetTo(to)
//	params.SetFrom(os.Getenv("TWILIO_PHONE_NUMBER"))
//
//	msg := fmt.Sprintf("Your OTP is %s", otp)
//	params.SetBody(msg)
//
//	_, err := client.Api.CreateMessage(params)
//	if err != nil {
//		log.Println(err.Error())
//		return err
//	}
//	log.Println("SMS sent successfully!")
//
//	return nil
//}
