package logging

import (
	"log"
	"os"
)

var (
	Info  *log.Logger
	Debug *log.Logger
	Error *log.Logger
)

func init() {
	Info = log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime|log.Lshortfile)
	Debug = log.New(os.Stdout, "DEBUG\t", log.Ldate|log.Ltime|log.Lshortfile)
	Error = log.New(os.Stderr, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)
}

func Err(err error, additionals ...string) {
	Error.Println(additionals, err.Error())
}
