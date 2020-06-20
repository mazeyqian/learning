package main

import "fmt"

func main () {
	a := 1
	switch a {
	case 1, 2, 3:
		fmt.Println("找到了", a)
		fallthrough
	case 4:
		fmt.Println("没找到！")
	}
}