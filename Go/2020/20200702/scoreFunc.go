package main

import (
    "fmt"
)

func main() {
    res := closure()
    fmt.Println(res) //0x49a880  返回内层函数函数体地址
    r1 := res()      //执行closure函数返回的匿名函数
    fmt.Println(r1)  //1
    r2 := res()
    fmt.Println(r2) //2 
    //普通的函数应该返回1，而这里存在闭包结构所以返回2 。
    //一个外层函数当中有内层函数，这个内层函数会操作外层函数的局部变量,并且外层函数把内层函数作为返回值,则这里内层函数和外层函数的局部变量,统称为闭包结构。这个外层函数的局部变量的生命周期会发生改变，不会随着外层函数的结束而销毁。
    //所以上面打印的r2 是累计到2 。

    res2 := closure() //再次调用则产生新的闭包结构 局部变量则新定义的
    fmt.Println(res2)
    r3 := res2()
    fmt.Println(r3)
}

//定义一个闭包结构的函数 返回一个匿名函数
func closure() func() int { //外层函数
    //定义局部变量a
    a := 0 //外层函数的局部变量
    //定义内层匿名函数 并直接返回
    return func() int { //内层函数
        a++ //在匿名函数中将变量自增。内层函数用到了外层函数的局部变量，此变量不会随着外层函数的结束销毁
        return a
    }
}