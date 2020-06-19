package main

import "fmt"

type UType int

const (
	NUM UType = iota
	ONE
	TWO
	THREE
)

func main () {
	fmt.Println(TWO)
	fmt.Println(THREE)

	foo := 'A'
	fmt.Println(foo)
}