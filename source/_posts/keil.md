title: keil uvsion5与51单片机的学习总结（不定时更新）
author: YouthGT
tags:
  - keil uvsion 5
  - 51单片机
categories:
  - 软件使用
date: 2020-12-19 20:16:00
---
![keil](https://img-blog.csdnimg.cn/20210223003647586.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1lvdXRoR1Q=,size_16,color_FFFFFF,t_70)
<!--more-->
### keil uvsion5软件下载
https://pan.baidu.com/s/1QjmrZcayz0edyzkcLT7nCw 
提取码: f7xv （失效请提醒）
### 常见报错总结

 1.*** ERROR L104: MULTIPLE PUBLIC DEFINITIONS
 出现该错误则是因为程序中bai某个变du量重复定义，把头文件zhi中的变量定义前加extern(只是变量声明不用初始化)，再在某一个要调用该变量的c文件的程序之前再定义(注意第一个调用的c文件要负责附带初始化该变量，其他调用的c文件就不需要初始化过程啦)。
> extern用于变量的用法：
extern int a;//声明一个全局变量a
int a; //定义一个全局变量a
extern int a =0 ;//定义一个全局变量a 并给初值。一旦给予赋值，一定是定义，定义才会分配存储空间。（注意：经过测试在GCC中，这样定义变量是不能通过编译的，而在VS2013可以）
int a =0;//定义一个全局变量a,并给初值，
声明之后不能直接使用这个变量，需要定义之后才能使用。
第四个等于第三个，都是定义一个可以被外部使用的全局变量，并给初值。
当你要引用一个全局变量的时候，你就要声明extern int a;这时候extern不能省略，因为省略了，就变成int a;这是一个定义，不是声明，就会出现变量重复定义的错误。

## C51语法的常见问题

1. _nop_()函数。
 C语言中没有_nop_()函数。
在51C中一般包含在#include “intrins.h” 头文件中。该函数是在51单片机中用的延时函数，表示执行一条没有什么意义的指令，延时一个指令周期，有的指令周期是两个或两个以上的机械周期，但是_nop_();指令需要的只是一个机械周期也就是12个时钟周期（震荡周期）。
51单片机中，1个机械周期 = 12个时钟周期 = 12 * （ 1 / f）。（f 为晶振频率）。如果只用的是12MHZ的晶振，那么 一个机械周期就是1us；也就是说：nop(); 指令的延迟时间为 1us。可以较为精确得控制延迟时间。
> nop指令的作用：
1）就是通过nop指令的填充（nop指令一个字节），使指令按字对齐，从而减少取指令时的内存访问次数。（一般用来内存地址偶数对齐，比如有一条指令，占3字节，这时候使用nop指令，cpu 就可以从第四个字节处读取指令了。）
2）通过nop指令产生一定的延迟，但是对于快速的CPU来说效果不明显，可以使用rep前缀，多延迟几个时钟。
3）i/o传输时，也会用一下 nop，等待缓冲区清空，总线恢复；
4）清除由上一个算术逻辑指令设置的flag位；