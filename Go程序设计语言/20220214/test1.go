// 测试
package main

import (
	"fmt"
)

func main() {
	medals := []string{"gold", "silver", "bronzee"}
	for i := len(medals) - 1; i >= 0; i-- {
		fmt.Println(medals[i])
	}
}
