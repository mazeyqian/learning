package main

import "fmt"

func main () {
	arr := []int{12, 7, 2}
	fmt.Println(arr)
	for i := len(arr) - 1; i > 0; i-- { // i 代表着每次获得的数字
		for j := 0; j < i; j++ {
			if arr[j] > arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j]
			}
		}
	}
	fmt.Println(arr)
}