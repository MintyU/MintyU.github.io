---
title: 바닥부터 시작하는 C++ (3) - iostream
date: 2020-02-18
tags:
  - C++
keywords:
  - C++
  - C
  - Object-Oriented Programming
  - 객체지향 프로그래밍
  - iostream
  - cout
  - cin
  - endl
---

## iostream(Input/Output Stream)

사용자가 프로그램과 대화하기 위해서는 사용자와 프로그램 사이의 입출력을 담당하는 수단이 필요합니다.

C++의 모든 것은 객체로 표현되므로, 입출력을 담당하는 수단 또한 C언어의 함수와는 달리 모두 객체입니다.

 

C언어의 printf() 함수나 scanf() 함수처럼 C++에서도 **iostream 헤더 파일에 표준 입출력 클래스를 정의**하고 있습니다.

C++에서는 **cout 객체로 출력** 작업을, **cin 객체로 입력** 작업을 수행하고 있습니다.

 

또한, C++에서는 기존의 C언어 스타일처럼 printf() 함수나 scanf() 함수로도 입출력 작업을 수행할 수 있습니다.

## cout 객체

cout 객체는 다양한 데이터를 출력하는 데 사용되는 C++에서 미리 정의된 출력 스트림을 나타내는 객체입니다.

cout 객체를 사용하는 문법은 다음과 같습니다.

> 문법
> ``` cpp
> std::cout << 출력할 데이터;
> ```

삽입 연산자(<<)는 오른쪽에 위치한 출력할 데이터를 출력 스트림에 삽입합니다.

이렇게 출력 스트림에 삽입된 데이터는 스트림을 통해 출력 장치로 전달되어 출력됩니다.

``` cpp
cout << "Hello World!"; // Hello World!
```

## cin 객체

cin 객체는 다양한 데이터를 입력받는 데 사용되는 C++에서 미리 정의된 입력 스트림을 나타내는 객체입니다.

cin 객체를 사용하는 문법은 다음과 같습니다.

> 문법
> ``` cpp
> std::cin >> 저장할 변수;
> ```
추출 연산자(>>)를 통해 사용자가 입력한 데이터를 입력 스트림에서 추출하여, 오른쪽에 위치한 변수에 저장합니다.

이때 cin 객체는 자동으로 사용자가 입력한 데이터를 오른쪽에 위치한 변수의 타입과 동일하게 변환시켜 줍니다.

**주의 : cout과 cin의 화살표 방향이 서로 다릅니다!**

> 예제
> ``` cpp
> #include <iostream>
> 
> using namespace std;
> 
>  
> 
> int main()
> 
> {
> 
>     int age;
> 
>  
> 
>     cout << "나이를 입력해 주세요 : ";
> 
>     cin >> age;
> 
>  
> 
>     cout << age << "살 입니다." << endl;
> 
>     return 0;
> 
> }
> ```

위의 예제에서 여러분이 입력한 데이터는 자동으로 정수를 저장할 때 사용하는 타입으로 변환될 것입니다.

만약에 문자열을 입력하면 cin 객체는 변수 age에 숫자가 아니라는 의미인 0을 전달할 것입니다.

## C언어 표준 입출력 함수와의 차이점

C언어 표준 입출력 함수인 printf() 함수나 scanf() 함수와 C++ 표준 입출력 객체와의 차이점은 다음과 같습니다.

 

1. 삽입 연산자(<<)와 추출 연산자(>>)가 데이터의 흐름을 나타내므로 좀 더 직관적입니다.

2. C++ 표준 입출력 객체는 입출력 데이터의 타입을 자동으로 변환시켜주므로 더욱 편리하고 안전합니다.
