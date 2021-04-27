---
title: 바닥부터 시작하는 C++ (2) - 네임스페이스, 주석
date: 2020-02-16
tags:
  - C++
keywords:
  - C++
  - C
  - Object-Oriented Programming
  - 객체지향 프로그래밍
  - namespace
  - 네임스페이스
  - comment
  - 주석
---

## 네임스페이스(Namespace)

네임스페이스란 이름이 기억되는 영역을 뜻하며, 이름이 소속된 공간을 의미합니다.

네임스페이스는 C++ 프로그램을 작성할 때 발생하는 이름에 대한 충돌을 방지해 주는 방법을 제공합니다.

이러한 네임스페이스는 C언어에는 없는 C++ 만의 새로운 기능입니다.

 

C++ 프로그램의 표준 구성 요소인 클래스, 함수, 변수 등은 std라는 이름 공간에 저장되어 있습니다.

따라서 C++ 프로그램에서 표준 헤더 파일인 iostream 내의 정의를 사용하려면 다음과 같이 사용해야 합니다.

> 예제
> ``` cpp
> #include <iostream>
> 
> #define TEXT "Welcome to C++ Programming!!"
> 
>  
> 
> int main()
> 
> {
> 
>     std::cout << TEXT;
> 
>     return 0;
> 
> }
> ```

위의 예제처럼 std라는 네임스페이스에 있는 정의를 사용하려면, std:: 접두어를 붙여 해당 정의가 std라는 네임스페이스에 있다는 것을 컴파일러에 알려줘야 합니다.

 

이러한 네임스페이스에 속한 정의를 간단하게 사용하려면 다음과 같은 명령문을 추가하면 됩니다.

> ``` cpp
> using namespace std; // std라는 네임스페이스에 속한 정의들은 네임스페이스 이름을 붙이지 않아도 사용할 수 있음.
> ```

다음 예제는 앞서 살펴본 예제와 정확히 같은 동작을 수행합니다.

> 예제
> ``` cpp
> #include <iostream>
> 
> #define TEXT "Welcome to C++ Programming!!"
> 
> using namespace std;
> 
>  
> 
> int main()
> 
> {
> 
>     cout << TEXT;
> 
>     return 0;
> 
> }
> ```

## 주석

주석이란 코드에 대한 이해를 돕는 설명을 적거나 디버깅을 위해 작성하는 일종의 메모입니다.

C++ 컴파일러는 주석은 무시하고 컴파일하므로, 실행 파일에서는 이러한 주석을 확인할 수 없습니다.

 

C++에서 주석을 작성하는 문법은 다음과 같습니다.

> 문법
> ``` cpp
> // 한 줄 주석
> 
> /*
> 
> 여러 줄 주석
> 
> */
> ```

C++에서는 여러 줄 주석 안에 또 다른 한 줄 주석을 삽입할 수 있습니다.
하지만 여러 줄 주석 안에 또 다른 여러 줄 주석은 중첩해서 삽입할 수는 없습니다.

> ``` cpp
> /*
> 
> 여러 줄 주석
> 
> //한 줄 주석 삽입 가능!
>
> */
>
> 
> /*
> 
> 여러 줄 주석
> 
> /*여러 줄 주석 삽입 불가*/
>
> */
>
> ```

위의 예제 마지막 줄 */는 주석으로 처리되지 않은 것을 확인할 수 있습니다.